import { NestFactory } from '@nestjs/core';
import { MemeServiceModule } from './meme_service.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(MemeServiceModule);

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
