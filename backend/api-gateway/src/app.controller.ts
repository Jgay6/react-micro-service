import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from "@nestjs/microservices";
import { AppService } from './app.service';
import { CreateUserDto } from "./dto/create-user.dto";


@Controller()
export class AppController {
  constructor(
      @Inject('USER_MICROSERVICE') private readonly clientUser: ClientProxy,
      @Inject('CARD_MICROSERVICE') private readonly clientCard: ClientProxy,
      @Inject('DECK_MICROSERVICE') private readonly clientDeck: ClientProxy,
      @Inject('LIBRARY_MICROSERVICE') private readonly clientLibrary: ClientProxy,
      private readonly appService: AppService
  ) {}

  @Get('user-hello')
  async userHello() {
    return this.clientUser.send('hello', {}).toPromise();
  }

  @Get('card-hello')
  async cardHello() {
    return this.clientCard.send('hello', {}).toPromise();
  }

  @Get('deck-hello')
  async deckHello() {
    return this.clientDeck.send('hello', {}).toPromise();
  }

  @Get('deck-hello-card')
  async deckHelloCard() {
    return this.clientDeck.send('hello-card', {}).toPromise();
  }

  @Get('library-hello')
  async libraryHello() {
    return this.clientLibrary.send('hello', {}).toPromise();
  }

  @Get('library-hello-card')
  async libraryHelloCard() {
    return this.clientLibrary.send('hello-card', {}).toPromise();
  }

  @Post('create-user')
  async createUser(@Body() payload: CreateUserDto) {
    return this.clientUser.send('create_user', payload).toPromise();
  }
}
