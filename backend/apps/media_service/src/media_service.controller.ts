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
    @Headers('x-session-id') sessionId: string,
    @Headers('authorization') auth: string,
    @Res() res: Response,
  ) {
    const userId =
      this.extractUserIdFromAuth(
        auth,
      );

    const filePath =
      await this.mediaService
        .downloadMeme(
          memeId,
          userId,
          sessionId
        );

    res.download(
      filePath,
      (err) => {
        if (err) {
          console.error(
            'Download error:',
            err
          );
        }
      }
    );
}
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