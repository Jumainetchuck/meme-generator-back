import { NestFactory } from '@nestjs/core';
import { MemeServiceModule } from './meme_service.module';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Charger .env du service
dotenv.config({
  path: path.resolve(__dirname, '../../meme_service/.env'),
  override: true,
});

async function bootstrap() {
  const app = await NestFactory.create(MemeServiceModule);

  // Activer CORS pour la communication API Gateway et frontend en dev
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true,
  });

  const port = process.env.PORT ?? 5553;
  await app.listen(port);
  console.log(`Meme Service running on http://localhost:${port}`);
}
bootstrap();






