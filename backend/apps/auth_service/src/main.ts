import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth_service.module';
import 'dotenv/config';
import * as path from 'path';
import * as dotenv from 'dotenv';

// Charger .env du service
dotenv.config({
  path: path.resolve(__dirname, '../../auth_service/.env'),
  override: true,
});

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);

  // Activer CORS pour la communication API Gateway et frontend en dev
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true,
  });

  const port = process.env.PORT ?? 5552;
  await app.listen(port);
  console.log(`Auth Service running on http://localhost:${port}`);
}
bootstrap();
