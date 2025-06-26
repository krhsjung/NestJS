import { Controller, Get } from '@nestjs/common';
import { SocketService } from './socket.service';
import { UtilsService } from '@app/utils';

@Controller()
export class SocketController {
  constructor(
    private readonly socketService: SocketService,
    private readonly utilsService: UtilsService,
  ) {}

  @Get()
  getHello(): string {
    return this.utilsService.getHelloSocket();
  }
}
