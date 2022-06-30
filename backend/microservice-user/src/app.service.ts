import { Injectable } from '@nestjs/common';
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class AppService {
  getHello(): string {
    return 'MicroService users!';
  }

  async createUser(payload: CreateUserDto) {
    return Promise.resolve(payload);
  }
}
