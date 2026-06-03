// apps/media_service/src/media_service.controller.ts

import {
  Controller, Post, Get, Delete, UseInterceptors, UploadedFile, Param, ParseIntPipe, Headers, Body, BadRequestException, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Response } from 'express';
import { MediaServiceService } from './media_service.service';

@Controller('media')
export class MediaServiceController {
  constructor(private readonly mediaService: MediaServiceService) {}

  // to Upload image
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Body('sessionId') sessionId?: string,
    @Headers('authorization') auth?: string
  ) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    const userId = this.extractUserIdFromAuth(auth);
    const fileUrl = await this.mediaService.uploadImage(file, userId, sessionId);

    return {
      success: true,
      url: fileUrl,
      size: file.size,
      mimetype: file.mimetype,
    };
  }

  // to download meme
  @Get('download/:memeId')
  async downloadMeme(
    @Param('memeId', ParseIntPipe) memeId: number,
    @Res() res: Response,
    @Headers('x-session-id') sessionId?: string,  // Après @Res()
    @Headers('authorization') auth?: string,       // Après @Res()
  ) {
    try {
      const userId = this.extractUserIdFromAuth(auth);

      const filePath = await this.mediaService.downloadMeme(
        memeId,
        userId,
        sessionId
      );

      const fileName = `meme_${memeId}_${Date.now()}.jpg`;

      res.download(filePath, fileName, (err: NodeJS.ErrnoException | null) => {
        if (err) {
          console.error('Download error:', err);
          if (err.code === 'ENOENT') {
            res.status(404).json({ 
              error: 'File not found',
              message: 'Le fichier du mème n\'existe plus.'
            });
          }
        }
      });
    } catch (error) {
      console.error('Download meme error:', error);
      
      if (error instanceof Error) {
        if (error.message.includes('Access denied')) {
          return res.status(403).json({ 
            error: 'Forbidden',
            message: 'Vous n\'avez pas accès à ce mème.'
          });
        }
        if (error.message.includes('not found')) {
          return res.status(404).json({ 
            error: 'Not found',
            message: 'Le mème n\'existe pas.'
          });
        }
      }

      res.status(500).json({ 
        error: 'Download failed',
        message: 'Erreur lors du téléchargement du mème.'
      });
    }
  }
//   @Get('download/:memeId')
//   async downloadMeme(
//     @Param('memeId', ParseIntPipe) memeId: number,
//     @Headers('x-session-id') sessionId: string,
//     @Headers('authorization') auth: string,
//     @Res() res: Response,
//   ) {
//     const userId =
//       this.extractUserIdFromAuth(
//         auth,
//       );

//     const filePath =
//       await this.mediaService
//         .downloadMeme(
//           memeId,
//           userId,
//           sessionId
//         );

//     res.download(
//       filePath,
//       (err) => {
//         if (err) {
//           console.error(
//             'Download error:',
//             err
//           );
//         }
//       }
//     );
// }
  // async downloadMeme(
  //   @Param('memeId', ParseIntPipe) memeId: number,
  //   @Headers('x-session-id') sessionId?: string,
  //   @Headers('authorization') auth?: string,
  //   @Res() res: Response
  // ) {
  //   const userId = this.extractUserIdFromAuth(auth);
  //   const filePath = await this.mediaService.downloadMeme(memeId, userId, sessionId);

  //   res.download(filePath, (err) => {
  //     if (err) console.error('Download error:', err);
  //   });
  // }

  // supprimer l' image
  @Delete(':fileId')
  async deleteImage(
    @Param('fileId') fileId: string,
    @Headers('authorization') auth?: string
  ) {
    const userId = this.extractUserIdFromAuth(auth);
    await this.mediaService.deleteImage(fileId, userId);

    return { success: true, message: 'Image deleted' };
  }

  // ✅ Get image info
  @Get(':fileId')
  async getImageInfo(@Param('fileId') fileId: string) {
    return this.mediaService.getImageInfo(fileId);
  }

  private extractUserIdFromAuth(auth?: string): number | undefined {
    if (!auth) return undefined;
    try {
      const token = auth.replace('Bearer ', '');
      const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
      return payload.sub;
    } catch {
      return undefined;
    }
  }
}