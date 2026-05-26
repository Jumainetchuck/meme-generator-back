import { JwtStrategy } from './jwt.strategy';
import { JwtModuleOptions } from './../../../node_modules/@nestjs/jwt/dist/interfaces/jwt-module-options.interface.d';
import { Module } from '@nestjs/common';
import { AuthServiceController } from './auth_service.controller';
import { AuthServiceService } from './auth_service.service';
import { PrismaModule } from './prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config/dist/config.module';

@Module({
    imports: [
      ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'apps/auth_service/.env',
    }),
      PrismaModule,
      PassportModule,
      JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  controllers: [AuthServiceController],
  providers: [
    AuthServiceService,
    PrismaService,
    JwtStrategy
  ],
})
export class AuthServiceModule {}
