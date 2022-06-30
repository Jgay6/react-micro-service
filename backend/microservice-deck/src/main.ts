import { INestMicroservice } from "@nestjs/common";
import { NestFactory } from '@nestjs/core';
import { Transport } from "@nestjs/microservices";
import { AppModule } from './app.module';

async function bootstrap() {
  const microservicesOptions: any = {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8877
    }
  };

  const app: INestMicroservice = await NestFactory.createMicroservice(AppModule, microservicesOptions);
  await app.listen();
}
bootstrap();
