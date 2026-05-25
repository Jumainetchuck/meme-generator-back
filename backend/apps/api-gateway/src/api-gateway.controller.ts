// import { Controller, Get } from '@nestjs/common';
// import { ApiGatewayService } from './api-gateway.service';

// @Controller()
// export class ApiGatewayController {
//   constructor(private readonly apiGatewayService: ApiGatewayService) {}

//   @Get()
//   getHello(): string {
//     return this.apiGatewayService.getHello();
//   }
// }
// apps/api-gateway/src/api-gateway.controller.ts

import { Controller, Post, Get, Put, Delete, Param, Body, Headers, Req, Res, UseInterceptors, UploadedFile } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Request } from 'express';
import type { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';
import FormData from 'form-data';
import { firstValueFrom } from 'rxjs';


@Controller('api')
export class ApiGatewayController {
  private readonly memeServiceUrl = 'http://localhost:5553';
  private readonly mediaServiceUrl = 'http://localhost:5554';
  private readonly authServiceUrl = 'http://localhost:5552';

  constructor(private readonly httpService: HttpService) {}

  // ✅ MEMES - Proxy vers Meme Service
  @Get('memes')
  async getMemes(
    @Headers('x-session-id') sessionId: string,
    @Headers('authorization') auth: string
  ) {
    const userId = this.extractUserId(auth);
    const endpoint = userId ? `${this.memeServiceUrl}/memes` : `${this.memeServiceUrl}/memes?sessionId=${sessionId}`;
    
    return this.httpService.get(endpoint, {
      headers: { 'Authorization': auth },
    }).toPromise();
  }

  @Post('memes')
  async createMeme(
    @Body() body: any,
    @Headers('x-session-id') sessionId: string,
    @Headers('authorization') auth: string
  ) {
    const userId = this.extractUserId(auth);
    const payload = { ...body, userId: userId || undefined, sessionId: !userId ? sessionId : undefined };

    return this.httpService.post(`${this.memeServiceUrl}/memes`, payload, {
      headers: { 'Authorization': auth },
    }).toPromise();
  }

  // ✅ MEDIA - Proxy vers Media Service
  @Post('media/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
  @UploadedFile()
  file: Express.Multer.File,
  @Headers('x-session-id') sessionId: string,
  @Headers('authorization') auth: string,
  ) {
  const userId = this.extractUserId(auth);

  const formData = new FormData();

  formData.append( 'file', file.buffer, {
      filename:
        file.originalname,
      contentType:
        file.mimetype,
    },
  );

  formData.append( 'sessionId', sessionId, );

  return this.httpService.post(
      `${this.mediaServiceUrl}/media/upload`,
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          Authorization: auth,
        },
      },
    )
    .toPromise();
  }
  // async uploadImage(
  //   @UploadedFile() file: Express.Multer.File,
  //   @Headers('x-session-id') sessionId: string,
  //   @Headers('authorization') auth: string
  // ) {
  //   const userId = this.extractUserId(auth);
  //   const formData = new FormData();
  //   formData.append('file', new Blob([file.buffer]));
  //   formData.append('sessionId', sessionId);

  //   return this.httpService.post(`${this.mediaServiceUrl}/media/upload`, formData, {
  //     headers: { ...formData.getHeaders(), 'Authorization': auth },
  //   }).toPromise();
  // }




  @Get('media/download/:memeId')
  async downloadMeme(
    @Param('memeId') memeId: string,
    @Headers('x-session-id') sessionId: string,
    @Headers('authorization') auth: string,
    @Res() res: Response,
    ) {
      const userId =
        this.extractUserId(auth);

      const response =
        await firstValueFrom(
          this.httpService.get(
            `${this.mediaServiceUrl}/media/download/${memeId}`,
          {
          responseType:
            'stream',

          headers: {
            'X-Session-Id':
              sessionId,
            Authorization:
              auth,
          },
        },
      ),
    );

  response.data.pipe(res);
}
  // async downloadMeme(
  //   @Param('memeId') memeId: string,
  //   @Headers('x-session-id') sessionId: string,
  //   @Headers('authorization') auth: string,
  //   @Res() res: Response
  // ) {
  //   const userId = this.extractUserId(auth);
  //   const response = await this.httpService.get(
  //     `${this.mediaServiceUrl}/media/download/${memeId}`,
  //     { 
  //       responseType: 'stream',
  //       headers: { 'X-Session-Id': sessionId, 'Authorization': auth },
  //     }
  //   ).toPromise();

  //   response.data.pipe(res);
  // }

  private extractUserId(auth?: string): number | undefined {
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