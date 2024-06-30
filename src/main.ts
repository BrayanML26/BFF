/* eslint-disable prettier/prettier */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   // Configuración CORS específica para el API (puerto diferente)
   app.enableCors({
    origin: '*', // Cambia esto según tus necesidades de seguridad
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  await app.listen(3000); // Puerto donde se ejecutará tu API
}
bootstrap();
