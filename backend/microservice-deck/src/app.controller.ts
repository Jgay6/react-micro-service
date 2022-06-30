import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from "@nestjs/microservices";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
      @Inject('CARD_MICROSERVICE') private readonly clientCard: ClientProxy,
      private readonly appService: AppService
  ) {}

  @MessagePattern('hello')
  async hello() {
    return await this.appService.getHello();
  }

  @MessagePattern('hello-card')
  async helloCard() {
    return await this.clientCard.send('hello', {}).toPromise();
  }
}
