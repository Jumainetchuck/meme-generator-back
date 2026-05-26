import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);

  // script pour contourner la securite CORS et communiquer avec une autre application sur un autre port
  app.enableCors({
  origin: 'http://localhost:5173', // 
  credentials: true,
});


   // config swagger
  const config = new DocumentBuilder()
    .setTitle('API GATEWAY')
    .setDescription('informations sur les services de mon API')
    .setVersion('1.0')
    .addTag('auth')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory);



  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application successfully running on ${await app.getUrl()}`);
}
bootstrap();
