import { Controller, Get, Post, Body, Request, UseGuards, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthServiceService } from './auth_service.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginDTO } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';



@Controller('auth')
export class AuthServiceController {
  constructor(private readonly authServiceService: AuthServiceService) {}

  // inscription
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() createUserDTO: CreateUserDTO) {
    return this.authServiceService.register(createUserDTO);
  }

  // connexion
  @Post('login')
  async login(@Body() loginDTO: LoginDTO) {
    return this.authServiceService.login(loginDTO);
  }

  // recuperer les infos de l'utilisateur a partir de son id
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return this.authServiceService.validateUser(req.user.sub);
  }
  // @Get('profile/:id')
  // async getProfile(@Param('id') userId: number) {
  //   return this.authServiceService.validate(id);
  // }


  // @Get()
  // getHello(): string {
  //   return this.authServiceService.getHello();
  // }
}
