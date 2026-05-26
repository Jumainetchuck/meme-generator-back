// import { NestFactory } from '@nestjs/core';
// import { MediaServiceModule } from './media_service.module';

// async function bootstrap() {
//   const app = await NestFactory.create(MediaServiceModule);
//   await app.listen(process.env.port ?? 3000);
// }
// bootstrap();
import { NestFactory } from '@nestjs/core';
import { MediaServiceModule } from './media_service.module';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Charger .env du service
dotenv.config({
  path: path.resolve(__dirname, '../../media_service/.env'),
  override: true,
});

async function bootstrap() {
  const app = await NestFactory.create(MediaServiceModule);

  // Activer CORS pour la communication API Gateway et frontend en dev
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true,
  });

  const port = process.env.PORT ?? 5554;
  await app.listen(port);
  console.log(`Media Service running on http://localhost:${port}`);
}
bootstrap();