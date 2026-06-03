import { IsEnum, IsOptional, IsString } from 'class-validator';


export enum SharePlatform {
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
  INSTAGRAM = 'instagram',
  WHATSAPP = 'whatsapp',
  LINKEDIN = 'linkedin',
  EMAIL = 'email',
  COPY_LINK = 'copy_link',
}

export class ShareMemeDto {
  @IsEnum(SharePlatform)
  platform!: SharePlatform;

  @IsOptional()
  @IsString()
  message?: string;  // Message personnalisé du partage
}

// ✅ Utiliser des readonly si ce sont des réponses immutables
export class MemeShareResponseDto {
  id!: number;
  memeId!: number;
  platform!: SharePlatform;
  shareUrl!: string;
  isPublic!: boolean;
  sharedAt!: Date;
}