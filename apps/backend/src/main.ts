import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('Fishing Club API').build();
  const document = SwaggerModule.createDocument(app, config);

  const port = process.env.PORT || 3333;
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/api}`);
}

bootstrap();
