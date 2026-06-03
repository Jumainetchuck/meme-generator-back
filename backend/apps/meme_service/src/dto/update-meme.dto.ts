import { PartialType } from '@nestjs/mapped-types';
import { CreateMemeDto } from './create-meme.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { MemeVisibility } from '../generated/prisma-client'; 

export class UpdateMemeDto extends PartialType(CreateMemeDto) {

    @IsEnum(MemeVisibility)
    @IsOptional()
  visibility?: 'PRIVATE' | 'PUBLIC' | 'TEMPORARY';
  
}