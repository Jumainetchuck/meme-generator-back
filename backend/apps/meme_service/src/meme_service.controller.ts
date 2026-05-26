import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Query } from '@nestjs/common';
import { MemeServiceService } from './meme_service.service';
import { CreateMemeDto } from './dto/create-meme.dto';
import { UpdateMemeDto } from './dto/update-meme.dto';
import { CreateTextLayerDto } from './dto/create-textLayer.dto';
import { UpdateTextLayerDto } from './dto/update-textLayer.dto';

@Controller('memes')
export class MemeServiceController {
  constructor(private readonly memeService: MemeServiceService) {}

  // recuperer tous les memes
  @Get()
  getAllMemes() {
    return this.memeService.getAllMemes();
  }

  // recuperer un meme
  @Get('/:id')
  getMeme(
    @Param('id', ParseIntPipe) id: number,
    @Query('sessionId') sessionId?: string,
    @Query('userId') userId?: number,
  ) {
    return this.memeService.getMeme(id, userId, sessionId);
  }

  @Post('/:id/download')
  recordDownload(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { userId?: number; sessionId?: string },
  ) {
    return this.memeService.recordDownload(id, body.userId, body.sessionId);
  }

  // creer un meme
  @Post()
  createMeme(@Body() body: CreateMemeDto & { userId?: number; sessionId?: string }) {
    return this.memeService.createMeme(body);
  }
  // @Post()
  // createMeme( @Body() data: CreateMemeDto, @Body('userId') userId: number) {
  //   return this.memeService.createMeme(data, userId);
  // }

  // modifier un meme
  // Extraire userId du body, pas l'inclure dans data
  //  @Put('/:id')
  // updateMeme(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateMemeDto, @Body('userId') userId: number) {
  //   // Créer un nouvel objet sans userId
  //   const { userId: _,  ...data } = Body;
  //   return this.memeService.updateMeme(id, data as UpdateMemeDto, userId);
  // }
    //  Extraire userId du body, pas l'inclure dans data
  @Put('/:id')
  updateMeme(
    @Param('id', ParseIntPipe) id: number, 
    @Body() body: any,
    @Body('userId') userId: number
  ) {
    // Créer un nouvel objet sans userId
    const { userId: _, ...data } = body;
    return this.memeService.updateMeme(id, data as UpdateMemeDto, userId);
  }



  // supprimer un meme
  @Delete('/:id')
  deleteMeme(@Param('id', ParseIntPipe) id: number, @Body('userId') userId: number) {
    return this.memeService.deleteMeme(id, userId);
  }

  // ajouter du texte sur un meme
  // @Post('/:memeId/text-layers')
  // addTextLayer(@Param('memeId', ParseIntPipe) memeId: number, @Body() dto: CreateTextLayerDto, @Body('userId') userId: number) {
  //   return this.memeService.addTextLayer(memeId, dto, userId);
  // }
  // Extraire userId, ne pas l'inclure dans le spread
  @Post('/:memeId/text-layers')
  addTextLayer(
    @Param('memeId', ParseIntPipe) memeId: number, 
    @Body() body: any,
  ) {
    const { userId, sessionId, ...data } = body;
    return this.memeService.addTextLayer(
      memeId,
      data as CreateTextLayerDto,
      userId,
      sessionId,
    );
  }



  // modifier du texte sur un meme
  // @Put('/:memeId/text-layers/:textId')
  // updateTextLayer(@Param('memeId', ParseIntPipe) memeId: number, @Param('textId', ParseIntPipe) textId: number, @Body() dto: UpdateTextLayerDto, @Body('userId') userId: number) {
  //   return this.memeService.updateTextLayer(textId, dto, userId);
  // }
  @Put('/:memeId/text-layers/:textId')
  updateTextLayer(
    @Param('memeId', ParseIntPipe) memeId: number, 
    @Param('textId', ParseIntPipe) textId: number, 
    @Body() body: any,
    @Body('userId') userId: number
  ) {
    // Créer un nouvel objet sans userId
    const { userId: _, ...data } = body;
    return this.memeService.updateTextLayer(textId, data as UpdateTextLayerDto, userId);
  }



  // supprimer du texte sur un meme
  @Delete('/:memeId/text-layers/:textId')
  deleteTextLayer(@Param('memeId', ParseIntPipe) memeId: number, @Param('textId', ParseIntPipe) textId: number, @Body('userId') userId: number) {
    return this.memeService.deleteTextLayer(textId, userId);
  }


}
