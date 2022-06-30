import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ClientOptions, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [
    {
      provide: 'USER_MICROSERVICE',
      useFactory: (configService: ConfigService) => {
        const options = {
          transport: Transport.TCP,
          options: {
            host: configService.get('USERS_MICROSERVICE_HOST'),
            port: Number(configService.get('USERS_MICROSERVICE_PORT')),
          },
        };
        return ClientProxyFactory.create(options as ClientOptions);
      },
      inject: [ConfigService],
    },
    {
      provide: 'CARD_MICROSERVICE',
      useFactory: (configService: ConfigService) => {
        const options = {
          transport: Transport.TCP,
          options: {
            host: configService.get('CARDS_MICROSERVICE_HOST'),
            port: Number(configService.get('CARDS_MICROSERVICE_PORT')),
          },
        };
        return ClientProxyFactory.create(options as ClientOptions);
      },
      inject: [ConfigService],
    },
    {
      provide: 'DECK_MICROSERVICE',
      useFactory: (configService: ConfigService) => {
        const options = {
          transport: Transport.TCP,
          options: {
            host: configService.get('DECKS_MICROSERVICE_HOST'),
            port: Number(configService.get('DECKS_MICROSERVICE_PORT')),
          },
        };
        return ClientProxyFactory.create(options as ClientOptions);
      },
      inject: [ConfigService],
    },
    {
      provide: 'LIBRARY_MICROSERVICE',
      useFactory: (configService: ConfigService) => {
        const options = {
          transport: Transport.TCP,
          options: {
            host: configService.get('LIBRARYS_MICROSERVICE_HOST'),
            port: Number(configService.get('LIBRARYS_MICROSERVICE_PORT')),
          },
        };
        return ClientProxyFactory.create(options as ClientOptions);
      },
      inject: [ConfigService],
    },
    AppService,
  ],
})
export class AppModule {}
