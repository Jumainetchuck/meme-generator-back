import { Controller, Get, Post, Put, Delete, Body, Patch, Param, ParseIntPipe, Query } from '@nestjs/common';
import { MemeServiceService } from './meme_service.service';
import { MemeVisibility } from './generated/prisma-client';
import { CreateMemeDto } from './dto/create-meme.dto';
import { UpdateMemeDto } from './dto/update-meme.dto';
import { CreateTextLayerDto } from './dto/create-textLayer.dto';
import { UpdateTextLayerDto } from './dto/update-textLayer.dto';
import { ShareMemeService } from './share/share-meme.service';
import { ShareMemeDto } from './dto/share-meme.dto';



@Controller('memes')
export class MemeServiceController {
  constructor(
    private readonly memeService: MemeServiceService,
    // share-service
    private readonly shareService: ShareMemeService,  
  ) {}

  // recuperer tous les memes
  @Get()
  getAllMemes() {
    return this.memeService.getAllMemes();
  }


  // Ajouter cette route après getAllMemes()
  @Get('user/:userId')
  async getUserGallery(
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    console.log('📚 Getting gallery for user:', userId);
    return this.memeService.getUserGallery(userId);
  }
  


  // recuperer un meme
  @Get('/:id')
  getMeme(
    @Param('id', ParseIntPipe) id: number,
    @Query('sessionId') sessionId?: string,
    @Query('userId', new ParseIntPipe({ optional: true })) userId?: number,  
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

  // modifier un meme
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

  // Changer la visibilité d'un mème (pour activation du partage)
  @Patch('/:id/visibility')
  async updateVisibility(
    @Param('id', ParseIntPipe) memeId: number,
    @Body() body: { visibility: string; userId?: number; sessionId?: string },
  ) {
    const { userId, sessionId, ...data } = body;
    return this.memeService.updateVisibility(memeId, data.visibility as MemeVisibility, userId, sessionId);
  }


  // supprimer un meme
  @Delete('/:id')
  deleteMeme(@Param('id', ParseIntPipe) id: number, @Body('userId') userId: number) {
    return this.memeService.deleteMeme(id, userId);
  }


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


  // Route pour partager un mème
  @Post('/:id/share')
  async shareMeme(
    @Param('id', ParseIntPipe) memeId: number,
    @Body() dto: ShareMemeDto,
    @Query('userId', new ParseIntPipe({ optional: true })) userId?: number,
    @Query('sessionId') sessionId?: string,
  ) {
    return this.shareService.shareMeme(memeId, userId, sessionId, dto);
  }
  

  // Route pour récupérer un mème par token de partage (PUBLIC)
  @Get('/shared/:token')
  async getSharedMeme(@Param('token') token: string) {
    return this.shareService.getMemeByShareToken(token);
  }

  // Route pour voir les stats de partage
  @Get('/:id/share-stats')
  async getShareStats(@Param('id', ParseIntPipe) memeId: number) {
    return this.shareService.getShareStats(memeId);
  }


  

}



