import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SWAGGER_DESCRIPTION, DEFAULT_HTTP_PORT } from './app.constants';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(process.env.API_PREFIX);
  app.useGlobalPipes(new ValidationPipe());

  const swaggerOptions = new DocumentBuilder()
      .setTitle(SWAGGER_DESCRIPTION.TITLE)
      .setDescription(SWAGGER_DESCRIPTION.DESCRIPTION)
      .setVersion(SWAGGER_DESCRIPTION.VERSION)
      .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup(process.env.SWAGGER_PREFIX, app, swaggerDocument);

  app.enableCors();
  await app.listen(process.env.PORT || DEFAULT_HTTP_PORT);
}
bootstrap();