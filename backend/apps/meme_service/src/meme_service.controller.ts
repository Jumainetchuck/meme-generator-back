import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateEtudiantDTO } from './dto/create-etudiant.dto';
import { MemeServiceService } from './meme_service.service';

@Controller('meme')
export class MemeServiceController {
  constructor(private readonly memeServiceService: MemeServiceService) {}

  // ajouter un etudiant
  @Post('add')
  @HttpCode(HttpStatus.CREATED)
  async addEtudiant(@Body() createEtudiantDTO: CreateEtudiantDTO) {
    return this.memeServiceService.addEtudiant(createEtudiantDTO);
  }

  // supprimer un etudiant
  @Delete('remove/:id')
  async removeEtudiant(@Param('id', ParseIntPipe) id: number) {
    return this.memeServiceService.removeEtudiant(id);
  }
}
