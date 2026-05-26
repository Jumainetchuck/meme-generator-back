import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { MediaServiceController } from './media_service.controller';
import { MediaServiceService } from './media_service.service';
import { PrismaModule } from './prisma/prisma.module';

const uploadsDir = path.resolve(
  process.cwd(),
  process.env.STORAGE_PATH || 'uploads',
);

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'apps/media_service/.env',
    }),
    ServeStaticModule.forRoot({
      rootPath: uploadsDir,
      serveRoot: '/api/media',
    }),
  ],
  controllers: [MediaServiceController],
  providers: [MediaServiceService],
})
export class MediaServiceModule {}
