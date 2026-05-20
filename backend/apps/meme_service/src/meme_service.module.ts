import { Module } from '@nestjs/common';
import { MemeServiceController } from './meme_service.controller';
import { MemeServiceService } from './meme_service.service';

@Module({
  imports: [],
  controllers: [MemeServiceController],
  providers: [MemeServiceService],
})
export class MemeServiceModule {}
