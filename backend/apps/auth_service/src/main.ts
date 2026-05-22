import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth_service.module';
import 'dotenv/config';
import { ConfigModule } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);

  // Ajouter le préfixe global /api
  app.setGlobalPrefix('api');

  // Activer CORS pour permettre les requêtes du frontend
  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application successfully running on ${await app.getUrl()}`);
}
bootstrap();
