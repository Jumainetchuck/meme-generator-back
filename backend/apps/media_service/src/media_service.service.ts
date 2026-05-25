// apps/media_service/src/media_service.service.ts

import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { ForbiddenException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import 'dotenv/config';


@Injectable()
export class MediaServiceService {
  private uploadDir = process.env.STORAGE_PATH || './uploads';

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
    if (!meme) {
      throw new NotFoundException('Meme not found');
    }

    // Convertir imageUrl en chemin local
    const filePath = this.urlToPath(meme.imageUrl);
    const exists = await this.fileExists(filePath);

    if (!exists) {
      throw new NotFoundException('File not found on disk');
    }

    // Enregistrer le téléchargement
    await this.recordDownload(memeId, userId, sessionId);

    return filePath;
  }

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
    return path.join(this.uploadDir, url.replace('/api/media/', ''));
  }

  private async fileExists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  private async getMemeFromService(
  memeId: number,
  userId?: number,
  sessionId?: string
): Promise<any> {
  try {
    const url = `http://localhost:5553/memes/${memeId}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      return null;
    }
    
    const meme = await response.json();

    // Vérifier permissions
    if (userId && meme.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }
    if (sessionId && meme.sessionId !== sessionId) {
      throw new ForbiddenException('Access denied');
    }

    return meme;
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