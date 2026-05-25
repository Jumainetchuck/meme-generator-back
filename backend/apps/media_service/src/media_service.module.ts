import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MediaServiceController } from './media_service.controller';
import { MediaServiceService } from './media_service.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
        ConfigModule.forRoot({
              isGlobal: true,
              envFilePath: 'apps/media_service/.env',
            }),
    
    
  ],
  controllers: [MediaServiceController],
  providers: [MediaServiceService],
})
export class MediaServiceModule {}