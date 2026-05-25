

import { IsString, IsNumber, IsNotEmpty, Min, Max, IsOptional } from 'class-validator';

export class CreateTextLayerDto {
  @IsString()
  @IsNotEmpty()
  content!: string;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  xPosition!: number;  

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  yPosition!: number;  

  @IsNumber()
  @IsOptional()
  @Min(8)
  @Max(200)
  fontSize?: number;

  @IsString()
  @IsOptional()
  fontFamily?: string;

  // Ajouter une validation hex pour color/strokeColor
  @IsString()
  @IsOptional()
  color?: string;

  strokeColor?: string;

  rotation?: number;
}