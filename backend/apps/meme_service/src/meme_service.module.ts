import { Module } from '@nestjs/common';
import { MemeServiceController } from './meme_service.controller';
import { MemeServiceService } from './meme_service.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ShareMemeService } from './share/share-meme.service';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: 'apps/meme_service/.env',
        }),
  ],
  controllers: [MemeServiceController],
  providers: [
    MemeServiceService,
    ShareMemeService,
  ],
})
export class MemeServiceModule {}
