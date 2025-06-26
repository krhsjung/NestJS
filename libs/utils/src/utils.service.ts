import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
  getHelloAPI(): string {
    return 'Hello API!';
  }
  getHelloSocket(): string {
    return 'Hello socket!';
  }
}
