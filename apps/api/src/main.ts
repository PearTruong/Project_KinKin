import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { createCorsOriginValidator, getAllowedOrigins } from './cors.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const allowedOrigins = getAllowedOrigins(process.env);
  console.log(`KinKin API CORS allowed origins: ${allowedOrigins.join(', ')}`);

  app.enableCors({
    origin: createCorsOriginValidator(allowedOrigins),
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: true }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('KinKin POS Demo API')
    .setDescription('Small API used to validate the KinKin POS technology stack.')
    .setVersion('0.1.0')
    .addBearerAuth()
    .build();
  SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, swaggerConfig));

  await app.listen(Number(process.env.PORT ?? 4000));
  console.log(`KinKin API running at http://localhost:${process.env.PORT ?? 4000}`);
}

void bootstrap();
