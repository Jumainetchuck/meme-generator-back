import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ShareMemeDto, SharePlatform } from '../dto/share-meme.dto';

@Injectable()
export class ShareMemeService {
  constructor(private prisma: PrismaService) {}

  async shareMeme(
    memeId: number,
    userId: number | undefined,
    sessionId: string | undefined,
    dto: ShareMemeDto,
  ) {
    // Vérifier que le mème existe
    const meme = await this.prisma.meme.findUnique({
      where: { id: memeId },
    });

    if (!meme) {
      throw new NotFoundException('Mème non trouvé');
    }

    // Vérifier que le mème est PUBLIC ou appartient à l'utilisateur
    if (meme.visibility !== 'PUBLIC' && meme.userId !== userId) {
      throw new BadRequestException('Ce mème n\'est pas public et ne peut pas être partagé');
    }

    // Générer une URL publique unique
    const shareToken = this.generateShareToken(memeId, Date.now());
    const shareUrl = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/share/${shareToken}`;

    // Enregistrer le partage
    const share = await this.prisma.memeShare.create({
      data: {
        memeId,
        platform: dto.platform,
        userId: userId || null,
        sessionId: sessionId || null,
        shareUrl,
        isPublic: meme.visibility === 'PUBLIC',
      },
    });

    return {
      id: share.id,
      memeId: share.memeId,
      platform: share.platform,
      shareUrl: share.shareUrl,
      socialMediaUrl: this.generateSocialMediaUrl(meme, share, dto),
    };
  }

  async getMemeByShareToken(token: string) {
    // Décoder le token pour obtenir l'ID du mème
    const memeId = this.decodeShareToken(token);
    
    const meme = await this.prisma.meme.findUnique({
      where: { id: memeId },
      include: { textLayers: true, shares: true },
    });

    if (!meme || meme.visibility !== 'PUBLIC') {
      throw new NotFoundException('Mème partagé non trouvé ou expiré');
    }

    return meme;
  }

  async getShareStats(memeId: number) {
    const shares = await this.prisma.memeShare.groupBy({
      by: ['platform'],
      where: { memeId },
      _count: true,
    });

    return shares;
  }

  // Utilitaires
  private generateShareToken(memeId: number, timestamp: number): string {
    const data = `${memeId}:${timestamp}`;
    return Buffer.from(data).toString('base64');
  }

  private decodeShareToken(token: string): number {
    try {
      const decoded = Buffer.from(token, 'base64').toString();
      const [memeId] = decoded.split(':');
      return parseInt(memeId, 10);
    } catch {
      throw new BadRequestException('Token invalide');
    }
  }

  private generateSocialMediaUrl(meme: any, share: any, dto: ShareMemeDto): string {
    const title = `Découvrez mon mème ! "${meme.title}"`;
    const message = dto.message || title;
    const imageUrl = meme.imageUrl;
    const shareLink = share.shareUrl;

    const urls = {
      [SharePlatform.FACEBOOK]: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}&quote=${encodeURIComponent(message)}`,
      [SharePlatform.TWITTER]: `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(shareLink)}`,
      [SharePlatform.WHATSAPP]: `https://wa.me/?text=${encodeURIComponent(`${message} ${shareLink}`)}`,
      [SharePlatform.LINKEDIN]: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareLink)}`,
      [SharePlatform.EMAIL]: `mailto:?subject=${encodeURIComponent(message)}&body=${encodeURIComponent(shareLink)}`,
      // Instagram nécessite une copie manuelle
      [SharePlatform.INSTAGRAM]: shareLink,  
      [SharePlatform.COPY_LINK]: shareLink,
    };

    return urls[dto.platform] || shareLink;
  }
}