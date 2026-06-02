// apps/media_service/src/media_service.service.ts

import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { ForbiddenException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import 'dotenv/config';
import sharp from 'sharp';



@Injectable()
export class MediaServiceService {
  private uploadDir = path.resolve(
    process.cwd(),
    process.env.STORAGE_PATH || 'uploads',

    // dist/apps/media_service/src
    // remonte à backend/uploads
    //   __dirname,                                    
    // '../../../../uploads',          
  );

  constructor() {
    this.ensureUploadDirExists();
  }

  async uploadImage(
    file: Express.Multer.File,
    userId?: number,
    sessionId?: string
  ): Promise<string> {
    if (!file) {
      throw new BadRequestException('No file provided');
    }

    const allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedMimes.includes(file.mimetype)) {
      throw new BadRequestException('Invalid file type. Only JPEG, PNG, GIF, WebP allowed');
    }

    const maxSize = parseInt(process.env.MAX_FILE_SIZE || '10485760');
    if (file.size > maxSize) {
      throw new BadRequestException(`File size exceeds ${maxSize / 1024 / 1024}MB limit`);
    }

    // Créer un dossier par user/session
    const subFolder = userId ? `user_${userId}` : `guest_${sessionId}`;
    const folderPath = path.join(this.uploadDir, subFolder);
    await fs.mkdir(folderPath, { recursive: true });

    // Générer un nom de fichier unique
    const fileExt = path.extname(file.originalname);
    const fileName = `${uuidv4()}${fileExt}`;
    const filePath = path.join(folderPath, fileName);

    // Sauvegarder le fichier
    await fs.writeFile(filePath, file.buffer);

    // Retourner l'URL (serveur va le servir statiquement)
    return `/api/media/${subFolder}/${fileName}`;
  }

  async downloadMeme(
    memeId: number,
    userId?: number,
    sessionId?: string
  ): Promise<string> {
    // Récupérer le meme depuis meme_service
    const meme = await this.getMemeFromService(memeId, userId, sessionId);

    // verificqtion du meme
    if (!meme) {
      throw new NotFoundException('Meme not found');
    }

    // pour voir exactement ce qui se passe lors du telechargement du meme et comprendre l'erreur
    console.log('meme récupéré:', meme);          
    console.log('uploadDir:', this.uploadDir);      
    console.log('filePath:', this.urlToPath(meme?.imageUrl));

    // Convertir imageUrl en chemin local
    const filePath = this.urlToPath(meme.imageUrl);
    const exists = await this.fileExists(filePath);

    if (!exists) {
      throw new NotFoundException('File not found on disk');
    }

   // Générer l'image avec les textes
    const outputPath = await this.generateMemeWithText(filePath, meme.textLayers);

    // Enregistrer le téléchargement
    await this.recordDownload(memeId, userId, sessionId);

    // Retourner l'image avec les textes, pas l'originale
    return outputPath;  
  }


  // methode pour generer les memes avec les textes
  private async generateMemeWithText(
  baseImagePath: string,
  textLayers: any[]
): Promise<string> {
  try {
    console.log('🎨 Début de génération du mème');
    console.log('📝 Nombre de textes:', textLayers?.length || 0);
    console.log('📝 Textes:', JSON.stringify(textLayers, null, 2));

    // Importer correctement canvas
    const { createCanvas, loadImage } = await import('canvas');

    // Charger l'image de base
    console.log('📸 Chargement de l\'image:', baseImagePath);
    const img = await loadImage(baseImagePath);
    console.log(`📸 Image chargée: ${img.width}x${img.height}`);

    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');

    // Dessiner l'image de base
    ctx.drawImage(img, 0, 0);
    console.log('✅ Image de base dessinée');

    // Appliquer chaque texte
    // Appliquer chaque texte
    if (textLayers && textLayers.length > 0) {
      // ✅ Constantes du canvas de référence du FRONTEND
      const CANVAS_REF_WIDTH = 500;
      const CANVAS_REF_HEIGHT = 400;
      
      // ✅ Dimensions réelles de l'image
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      // ✅ Calcul des échelles
      const scaleX = canvasWidth / CANVAS_REF_WIDTH;
      const scaleY = canvasHeight / CANVAS_REF_HEIGHT;
      const fontScale = Math.min(scaleX, scaleY);
      
      console.log(`📐 Rescaling:`, {
        refCanvas: `${CANVAS_REF_WIDTH}x${CANVAS_REF_HEIGHT}`,
        realImage: `${canvasWidth}x${canvasHeight}`,
        scales: { x: scaleX.toFixed(3), y: scaleY.toFixed(3), font: fontScale.toFixed(3) }
      });
      
      for (let i = 0; i < textLayers.length; i++) {
      const text = textLayers[i];
      
      // ✅ Rescaler les positions
      const x = text.xPosition * scaleX;
      const y = text.yPosition * scaleY;
      
      // ✅ Rescaler la taille du texte
      const fontSizeScaled = Math.max(8, text.fontSize * fontScale);
      
      // ✅ IMPORTANT : Utiliser zIndex pour définir l'alignement
      // zIndex contient en réalité textAnchor : 0=gauche, 1=centré, 2=droite
      let textAlign: CanvasTextAlign = 'start';
      if (text.zIndex === 1) {
        textAlign = 'center';
      } else if (text.zIndex === 2) {
        textAlign = 'end';
      }
      
      console.log(`🔤 Texte ${i + 1} rescalé:`, {
        content: text.content,
        original: { x: text.xPosition, y: text.yPosition, fontSize: text.fontSize },
        rescaled: { x: Math.round(x), y: Math.round(y), fontSize: Math.round(fontSizeScaled) },
        alignment: textAlign,
        zIndex: text.zIndex,
      });

      ctx.save();
      ctx.translate(x, y);
      
      if (text.rotation) {
        ctx.rotate((text.rotation * Math.PI) / 180);
      }

      const fontFamily = 'Arial, sans-serif';
      const font = `bold ${fontSizeScaled}px ${fontFamily}`;
      
      ctx.font = font;
      ctx.fillStyle = text.color || '#FFFFFF';
      ctx.strokeStyle = text.strokeColor || '#000000';
      ctx.lineWidth = Math.max(1, 2 * fontScale);
      ctx.textBaseline = 'top';
      ctx.textAlign = textAlign;  // ✅ Utiliser l'alignement calculé

      ctx.strokeText(text.content, 0, 0);
      ctx.fillText(text.content, 0, 0);

      ctx.restore();
      console.log(`✅ Texte ${i + 1} appliqué avec alignement: ${textAlign}`);
    }
    } else {
      console.warn('⚠️ Aucun texte à appliquer');
    }

    // Générer le fichier de sortie
    const outputDir = path.join(this.uploadDir, 'downloads');
    await fs.mkdir(outputDir, { recursive: true });

    const fileName = `meme_${Date.now()}.jpg`;
    const outputPath = path.join(outputDir, fileName);

    // Convertir en Buffer et sauvegarder
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
    await fs.writeFile(outputPath, buffer);

    console.log(`✅ Mème généré avec succès: ${outputPath}`);
    return outputPath;
  } catch (error) {
    console.error('❌ Erreur lors de la génération du mème:', error);
    throw new BadRequestException(`Failed to generate meme with text: ${error instanceof Error ? error.message : String(error)}`);
  }
}


  // supprimer une image
  async deleteImage(fileId: string, userId?: number): Promise<void> {
    const filePath = this.urlToPath(`/api/media/${fileId}`);
    
    // Vérifier que l'utilisateur possède le fichier
    if (userId) {
      const owner = await this.getFileOwner(filePath);
      if (owner !== userId) {
        throw new BadRequestException('Unauthorized to delete this file');
      }
    }

    await fs.unlink(filePath);
  }

  async getImageInfo(fileId: string): Promise<any> {
    const filePath = this.urlToPath(`/api/media/${fileId}`);
    const stats = await fs.stat(filePath);

    return {
      fileId,
      size: stats.size,
      createdAt: stats.birthtime,
      url: `/api/media/${fileId}`,
    };
  }

  // Utilitaires
  private async ensureUploadDirExists(): Promise<void> {
    await fs.mkdir(this.uploadDir, { recursive: true });
  }

  private urlToPath(url: string): string {
  try {
    // Si c'est une URL complète, extraire le chemin
    if (url.startsWith('http')) {
      const urlObj = new URL(url);
      return path.join(this.uploadDir, urlObj.pathname.replace('/api/media/', ''));
    }
    // Si c'est déjà un chemin relatif
    return path.join(this.uploadDir, url.replace('/api/media/', ''));
  } catch (error) {
    console.error('Error parsing URL:', url, error);
    throw new BadRequestException('Invalid file URL');
  }
}

  private async fileExists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  private async getMemeFromService( memeId: number, userId?: number, sessionId?: string
): Promise<any> {
  try {
    const params = new URLSearchParams();
    // Envoyer les deux — le meme_service choisira lequel utiliser
    if (userId != null) params.set('userId', String(userId));
    if (sessionId) params.set('sessionId', sessionId);
    
    const qs = params.toString();
    const url = `http://localhost:5553/memes/${memeId}${qs ? `?${qs}` : ''}`;

    // pour voir exactement ce qui se passe lors de l'appel à meme_service et comprendre l'erreur
    console.log('🔍 URL appelée:', url);          
    const response = await fetch(url);
    
    if (!response.ok) {
      const body = await response.text();

      // ajouter ce log pour voir la réponse d'erreur brute de meme_service
      console.log('🔍 Réponse erreur:', body);    

      return null;
    }

    // retourner directement, les permissions
    //    sont déjà vérifiées par le meme_service
    return await response.json(); 
                                  
    
    // const meme = await response.json();

    // // Vérifier permissions
    // if (userId && meme.userId !== userId) {
    //   throw new ForbiddenException('Access denied');
    // }
    // if (sessionId && meme.sessionId !== sessionId) {
    //   throw new ForbiddenException('Access denied');
    // }

    // return meme;
  } catch (error) {
    console.error('Error fetching meme:', error);
    return null;
  }
}

  private async recordDownload(
  memeId: number,
  userId?: number,
  sessionId?: string
): Promise<void> {
  try {
    await fetch(`http://localhost:5553/memes/${memeId}/download`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, sessionId }),
    });
  } catch (error) {
    console.error('Error recording download:', error);
  }
}

  private async getFileOwner(filePath: string): Promise<number | null> {
    // Extraire l'userId du chemin du fichier
    const match = filePath.match(/user_(\d+)/);
    return match ? parseInt(match[1], 10) : null;
  }
}