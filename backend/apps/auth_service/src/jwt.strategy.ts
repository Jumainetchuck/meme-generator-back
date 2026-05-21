// defini comment nestjs doit ecouter et valider nos jwt
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { InternalServerErrorException } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ConfigService } from "@nestjs/config";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    // Vérification de sécurité pour s'assurer que le secret est défini
    // const secret = process.env.JWT_SECRET;
    const secret = configService.get<string>('JWT_SECRET');
    if (!secret) {
      throw new InternalServerErrorException("JWT_SECRET n'est pas défini dans les variables d'environnement");
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret, // Ici, TypeScript sait que 'secret' est une string
    });
  }

  async validate(payload: any) {
    return { sub: payload.sub, email: payload.email };
  }
}


// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor() {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: process.env.JWT_SECRET,
//     });
//   }

//   async validate(payload: any) {
//     return { sub: payload.sub, email: payload.email };
//   }
// }