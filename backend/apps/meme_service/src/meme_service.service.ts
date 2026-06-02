import { ConflictException, Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CreateMemeDto } from './dto/create-meme.dto';
import { UpdateMemeDto } from './dto/update-meme.dto';
import { CreateTextLayerDto } from './dto/create-textLayer.dto';
import { UpdateTextLayerDto } from './dto/update-textLayer.dto';

@Injectable()
export class MemeServiceService {

  constructor(private readonly prisma: PrismaService) {
    // Nettoyer les memes expirés toutes les heures
    this.startCleanupJob();
  }

  // methode de nettoyage des memes expirés, à appeler régulièrement (ex: toutes les heures)
  private startCleanupJob() {
  setInterval(async () => {
    try {
      const now = new Date();
      const expired = await this.prisma.meme.findMany({
        where: {
          expiresAt: { lt: now },
          userId: null,  // Seulement guests
        },
      });

      if (expired.length > 0) {
        await this.prisma.meme.deleteMany({
          where: { id: { in: expired.map(m => m.id) } },
        });
        console.log(`🗑️ Cleaned up ${expired.length} expired memes`);
      }
    } catch (err) {
      console.error('Cleanup job error:', err);
    }
  }, 60 * 60 * 1000);  // 1 hour
}
// // Nettoyage automatique des memes expiré
//   private startCleanupJob() {
//     setInterval(async () => {
//       const now = new Date();
//       const expired = await this.prisma.meme.findMany({
//         where: {
//           expiresAt: {
//             lt: now,
//           },
//           userId: null, // Seulement les guests
//         },
//       });

//       for (const meme of expired) {
//         await this.prisma.meme.delete({ where: { id: meme.id } });
//       }

//       console.log(`Cleaned up ${expired.length} expired memes`);
//     }, 60 * 60 * 1000); // Toutes les heures
//   }

  // // creer meme
  // async createMeme( data: CreateMemeDto, ownerId: number ) {
  //   const titleExists = await this.prisma.meme.findUnique({
  //     where: { title: data.title},
  //   });

  //   if(titleExists) {
  //     throw new ConflictException( `Un meme avec le titre "${data.title}" existe déjà.` );
  //   }

  //   const meme = await  this.prisma.meme.create({
  //     data: {
  //       title: data.title,
  //       imageUrl: data.imageUrl,
  //       ownerId,
  //     },
  //     include: { textLayers: true},
  //   });

  //   return meme;
  // }
  async createMeme(
    data: CreateMemeDto & { userId?: number; sessionId?: string }
  ) {
    const { userId, sessionId, ...memeData } = data;

    const titleExists = await this.prisma.meme.findUnique({
      where: { title: memeData.title },
    });

    if (titleExists) {
      throw new ConflictException(
        `Un meme avec le titre "${memeData.title}" existe déjà.`
      );
    }

    // Meme temporaire si guest (24h expiration)
    const expiresAt = !userId
      ? new Date(Date.now() + 24 * 60 * 60 * 1000)
      : null;
    
      const meme = await this.prisma.meme.create({
      data: {
        title: memeData.title,
        imageUrl: memeData.imageUrl,
        userId: userId || null,
        sessionId: !userId ? sessionId : null,
        expiresAt,
        visibility: userId ? 'PRIVATE' : 'TEMPORARY',
      },
      include: { textLayers: true },
    });

    return meme;
  }



  // recuperer tous les memes
  async getAllMemes() {
    const memes = await this.prisma.meme.findMany({
      include: { 
        textLayers: true
      },
    })

    return memes;
  }


  // recuperer un meme
  // async getMeme(memeId: number) {
  //   const meme = await this.prisma.meme.findUnique({
  //     where: { id: memeId },
  //     include: { textLayers: true },
  //   });

  //   if(!meme) {
  //     throw new NotFoundException("meme not found");
  //   }

  //   return meme;
  // }
  // Récupérer meme et vérifier permissions
  
async getMeme(memeId: number, userId?: number, sessionId?: string) {
  const meme = await this.prisma.meme.findUnique({
    where: { id: memeId },
    include: { textLayers: true },
  });

  if (!meme) throw new NotFoundException('Meme not found');

  // Log temporaire pour m'aider dans le déboguage
  console.log('meme.userId:', meme.userId, '| reçu userId:', userId, typeof userId);
  console.log('meme.sessionId:', meme.sessionId);
  console.log('reçu sessionId:', sessionId);

  if (meme.expiresAt && new Date() > meme.expiresAt) {
    await this.prisma.meme.delete({ where: { id: memeId } });
    throw new NotFoundException('Meme has expired');
  }

  // Meme appartenant à un user connecté
  if (meme.userId) {
    if (meme.userId === userId) return meme;
    throw new ForbiddenException('Access denied');
  }

  // Meme guest : accepter si sessionId correspond
  //    OU si l'utilisateur connecté envoie le bon sessionId
   // Meme guest : accepter si le sessionId correspond
  // (que l'appelant soit connecté ou non, le sessionId suffit)
  if (meme.sessionId && meme.sessionId === sessionId) return meme;

  throw new ForbiddenException('Access denied');
}





  // mmodification d'un meme, uniquement par son propriétaire
  async updateMeme( memeId: number, data: UpdateMemeDto, userId: number) {
    const meme = await this.prisma.meme.findUnique({
      where: { id: memeId },
    });

    if (!meme) {
      throw new NotFoundException( "Meme not found");
    }

    if (meme.userId !== userId) {
      throw new ForbiddenException("Access denied");
    }

    return this.prisma.meme.update({
      where: { id: memeId },
      data: data,
      include: {
        textLayers: true,
      }
    });
  }


    // supprimer un meme
  async deleteMeme(memeId: number, userId: number) {
    const meme = await this.prisma.meme.findUnique({ 
      where: { id: memeId }, 
    });
    if (!meme) {
      throw new NotFoundException("Meme not found");
    }

    if (meme.userId !== userId) {
      throw new ForbiddenException("Access denied");
    }
  
    return this.prisma.meme.delete({ 
      where: { id: memeId }, 
    });
  }


  private assertCanModifyMeme(
    meme: { userId: number | null; sessionId: string | null },
    userId?: number,
    sessionId?: string,
  ): void {
    if (meme.userId) {
      if (userId !== meme.userId) {
        throw new ForbiddenException('Access denied');
      }
      return;
    }
    if (!sessionId || meme.sessionId !== sessionId) {
      throw new ForbiddenException('Access denied');
    }
  }

  // creation d'un texte
  async addTextLayer(
    memeId: number,
    data: CreateTextLayerDto,
    userId?: number,
    sessionId?: string,
  ) {
    const meme = await this.prisma.meme.findUnique({
      where: { id: memeId },
    });

    if (!meme) {
      throw new NotFoundException('Meme not found');
    }

    this.assertCanModifyMeme(meme, userId, sessionId);

    return this.prisma.textLayer.create({
      data: {
        memeId,
        ...data,
      },
      include: {
        meme: true,
      },
    });
  }

  // modification d'un texte, uniquement par le propriétaire du meme
  async updateTextLayer( textId: number, data: UpdateTextLayerDto, userId: number ) {
    const text = await this.prisma.textLayer.findUnique({
      where: { id: textId,},
      include: { meme: true},
    });

    if (!text) {
      throw new NotFoundException('Text layer not found');
    }

    if (text.meme.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }

    return this.prisma.textLayer.update({
      where: {
        id: textId,
      },
      data: data,
      include:{ meme: true, },
    });
  }


  // supprimer un textLayer
  async deleteTextLayer(textId: number, userId: number) {
    const text = await this.prisma.textLayer.findUnique({
      where: { id: textId },
      include: { meme: true },
    });
  
    if (!text) {
      throw new NotFoundException("Text layer not found");
    }

    if (text.meme.userId !== userId) {
      throw new ForbiddenException("Access denied");
    }
  
    return this.prisma.textLayer.delete({ where: { id: textId } });
  }



  // ✅ Enregistrer le téléchargement
  async recordDownload(
    memeId: number,
    userId?: number,
    sessionId?: string
  ) {
    const meme = await this.prisma.meme.findUnique({
      where: { id: memeId },
    });

    if (!meme) {
      throw new NotFoundException('Meme not found');
    }

    await this.prisma.download.create({
      data: {
        memeId,
        userId: userId || null,
        sessionId: !userId ? sessionId : null,
      },
    });

    return { success: true };
  }


  // Récupérer la galerie de l'utilisateur
  async getUserGallery(userId: number) {
    const memes = await this.prisma.meme.findMany({
      where: {
        userId: userId,
        expiresAt: null, // Seulement les memes persistants
      },
      include: {
        textLayers: true,
        downloads: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    return memes;
  }


}
