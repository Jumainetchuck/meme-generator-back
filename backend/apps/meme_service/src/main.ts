import { NestFactory } from '@nestjs/core';
import { MemeServiceModule } from './meme_service.module';


async function bootstrap() {
  const app = await NestFactory.create(MemeServiceModule);



  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application successfully running on ${await app.getUrl()}`);
}
bootstrap();






