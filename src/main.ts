import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* 
    Swagger API documentation config
  */

  const config = new DocumentBuilder()
    .setTitle('KUIDISALUD')
    .setDescription('Kuidisalud API')
    .setVersion('1.0')
    .addTag('KUIDISALUD REST API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  /* 
    CORS Policy config.
    See the ORIGIN env variable to switch 
    bettwen development and production 
  */


  app.enableCors({
    origin: "*",
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  

  /* 
      Initialize App
    */

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
