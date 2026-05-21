import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth_service.module';
import 'dotenv/config';
import { ConfigModule } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);



  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application successfully running on ${await app.getUrl()}`);
}
bootstrap();
