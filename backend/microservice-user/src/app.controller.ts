import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from "@nestjs/microservices";
import { AppService } from "./app.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService
  ) {}

  @MessagePattern('create_user')
  async createUser(@Payload() payload: CreateUserDto) {
    return await this.appService.createUser(payload);
  }

  @MessagePattern('hello')
  async hello() {
    return await this.appService.getHello();
  }
}
