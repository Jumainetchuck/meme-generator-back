import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Headers,
  Res,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  Delete,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import type { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import FormData from 'form-data';
import { firstValueFrom } from 'rxjs';
import { Multer } from 'multer';
import { UnauthorizedException } from '@nestjs/common';

@Controller('api')
export class ApiGatewayController {
  private readonly memeServiceUrl = 'http://localhost:5553';
  private readonly mediaServiceUrl = 'http://localhost:5554';
  private readonly authServiceUrl = 'http://localhost:5552';

  constructor(private readonly httpService: HttpService) {}

  @Get('memes')
  async getMemes(
    @Headers('x-session-id') sessionId: string,
    @Headers('authorization') auth: string,
  ) {
    const userId = this.extractUserId(auth);
    const endpoint = userId
      ? `${this.memeServiceUrl}/memes`
      : `${this.memeServiceUrl}/memes?sessionId=${sessionId}`;

    const response = await firstValueFrom(
      this.httpService.get(endpoint, {
        headers: { Authorization: auth },
      }),
    );
    return response.data;
  }

  @Post('memes')
  async createMeme(
    @Body() body: any,
    @Headers('x-session-id') sessionId: string,
    @Headers('authorization') auth: string,
  ) {
    const userId = this.extractUserId(auth);
    const payload = {
      ...body,
      userId: userId || body.userId || undefined,
      sessionId: !userId ? sessionId || body.sessionId : undefined,
    };

    const response = await firstValueFrom(
      this.httpService.post(`${this.memeServiceUrl}/memes`, payload, {
        headers: { Authorization: auth },
      }),
    );
    return response.data;
  }

  @Post('memes/:memeId/text-layers')
  async addTextLayer(
    @Param('memeId') memeId: string,
    @Body() body: any,
    @Headers('x-session-id') sessionId: string,
    @Headers('authorization') auth: string,
  ) {
    const userId = this.extractUserId(auth);
    const payload = {
      ...body,
      userId: userId ?? body.userId,
      sessionId: !userId ? sessionId || body.sessionId : body.sessionId,
    };

    const response = await firstValueFrom(
      this.httpService.post(
        `${this.memeServiceUrl}/memes/${memeId}/text-layers`,
        payload,
        { headers: { Authorization: auth } },
      ),
    );
    return response.data;
  }

  @Post('media/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Headers('x-session-id') sessionId: string,
    @Headers('authorization') auth: string,
  ) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    const formData = new FormData();
    formData.append('file', file.buffer, {
      filename: file.originalname,
      contentType: file.mimetype,
    });
    formData.append('sessionId', sessionId || '');

    const response = await firstValueFrom(
      this.httpService.post(`${this.mediaServiceUrl}/media/upload`, formData, {
        headers: {
          ...formData.getHeaders(),
          Authorization: auth,
        },
      }),
    );
    return response.data;
  }

  @Get('media/download/:memeId')
async downloadMeme(
  @Param('memeId') memeId: string,
  @Headers('x-session-id') sessionId: string,
  @Headers('authorization') auth: string,
  @Res() res: Response,
) {
  try {                                          // ✅ ajouter try/catch
    const response = await firstValueFrom(
      this.httpService.get(
        `${this.mediaServiceUrl}/media/download/${memeId}`,
        {
          responseType: 'stream',
          headers: {
            'X-Session-Id': sessionId,
            Authorization: auth,
          },
        },
      ),
    );
    response.data.pipe(res);
  } catch (error: any) {
    const status = error?.response?.status ?? 500;
    const message = error?.response?.data?.message ?? 'Échec du téléchargement';
    res.status(status).json({ message });        // ✅ renvoyer l'erreur au frontend
  }
}

  /** Proxy des fichiers uploadés (aperçu image dans le frontend) */
  @Get('media/*path')
  async serveMediaFile(@Param('path') filePath: string | string[], @Res() res: Response) {
    const relativePath = Array.isArray(filePath) ? filePath.join('/') : filePath;
    const targetUrl = `${this.mediaServiceUrl}/api/media/${relativePath}`;

    const response = await firstValueFrom(
      this.httpService.get(targetUrl, { responseType: 'stream' }),
    );

    const contentType = response.headers['content-type'];
    if (typeof contentType === 'string') {
      res.setHeader('Content-Type', contentType);
    }
    response.data.pipe(res);
  }

  private extractUserId(auth?: string): number | undefined {
    if (!auth || auth === 'Bearer ') return undefined;
    try {
      const token = auth.replace('Bearer ', '');
      const payload = JSON.parse(
        Buffer.from(token.split('.')[1], 'base64').toString(),
      );
      return payload.sub;
    } catch {
      return undefined;
    }
  }

  @Get('memes/gallery')
  async getUserGallery(
    @Headers('authorization') auth: string,
  ) {
    const userId = this.extractUserId(auth);
    
    if (!userId) {
      throw new UnauthorizedException('User not authenticated');
    }

    console.log('📚 Fetching gallery for userId:', userId);

    const response = await firstValueFrom(
      this.httpService.get(`${this.memeServiceUrl}/memes/user/${userId}`, {
        headers: { Authorization: auth },
      }),
    );
    
    return response.data;
  }

  // route de suppression de meme
  @Delete('memes/:memeId')
async deleteMeme(
  @Param('memeId') memeId: string,
  @Headers('authorization') auth: string,
) {
  const userId = this.extractUserId(auth);

  const response = await firstValueFrom(
    this.httpService.delete(
      `${this.memeServiceUrl}/memes/${memeId}`,
      {
        data: { userId },
        headers: { Authorization: auth },
      },
    ),
  );
  return response.data;
}
}
