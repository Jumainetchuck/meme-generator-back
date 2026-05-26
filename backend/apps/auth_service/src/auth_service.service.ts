import { PrismaService } from './prisma/prisma.service';
import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthServiceService {

  constructor(
    private prisma: PrismaService,
    private jwt: JwtService
  ) {}

  async register(createUserDTO: CreateUserDTO): Promise<any>{
    const { firstName, lastName, email, password } = createUserDTO;

    // verifier l'unicite de l'email
    const existingUser = await this.prisma.user.findUnique({
      where: { email},
    })

    if(existingUser) {
      throw new ConflictException("un utilisateur avec cet email existe deja");
    }

    // nbre de fois que l'algo de hashage doit etre applique pour hasher le mot de passe
    const saltRounds = 10;

    // hasher le mot de passe avant de le stocker
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // creer l'user
    const user = await this.prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        createdAt: true,
      }
    })

    // generer un token JWT pour l'utilisateur
    const payload = { sub: user.id, email: user.email};
    const access_token = await this.jwt.signAsync(payload);

    return {
      user,
      access_token,
    }

  }

  async login(loginDTO: LoginDTO): Promise<any>{
    const { email, password } = loginDTO;

    // verifier que l'user existe
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if(!user) {
      throw new UnauthorizedException("email ou mot de passe incorrect");
    }

    // comparer le mot de passe fourni avec le mot de passe hashé stocké
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
      throw new UnauthorizedException("email ou mot de passe incorrect");
    }

    // generer un token JWT pour l'utilisateur
    const payload = { sub: user.id, email: user.email };
    const access_token= await this.jwt.signAsync(payload);

    return {
      user: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        createdAt: true,
      },
      access_token,
    }

  }


  // recuperer les infos completes de l'user a partir de son id
  async validateUser(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId},
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        createdAt: true,
      }
    });

    return user;
  }



  getHello(): string {
    return 'Hello World je suis le service dauthentification!';
  }
}
