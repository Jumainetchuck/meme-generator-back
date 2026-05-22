import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { MemeServiceController } from './meme_service.controller';
import { MemeServiceService } from './meme_service.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'apps/meme_service/.env',
    }),
    PrismaModule,
  ],
  controllers: [MemeServiceController],
  providers: [MemeServiceService, PrismaService],
})
export class MemeServiceModule {}
