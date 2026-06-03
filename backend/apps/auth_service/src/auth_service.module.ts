import { JwtStrategy } from './jwt.strategy';
import { Module } from '@nestjs/common';
import { AuthServiceController } from './auth_service.controller';
import { AuthServiceService } from './auth_service.service';
import { PrismaModule } from './prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { ConfigModule,  } from '@nestjs/config/dist/config.module';
// import { ConfigService } from '@nestjs/config/dist/config.service';

@Module({
    imports: [
      ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'apps/auth_service/.env',
    }),
      PrismaModule,
      PassportModule,
      // JwtModule.register({
      //   global: true,
      //   secret: process.env.JWT_SECRET,
      //   signOptions: { expiresIn: '30d' },
      // }),
      JwtModule.registerAsync({
        imports: [ConfigModule],
        useFactory: (config: ConfigService) => ({
          global: true,
          secret: config.get('JWT_SECRET'),
          signOptions: { expiresIn: '30d' },
        }),
      inject: [ConfigService],
})
  ],
  controllers: [AuthServiceController],
  providers: [
    AuthServiceService,
    PrismaService,
    JwtStrategy
  ],
})
export class AuthServiceModule {}
