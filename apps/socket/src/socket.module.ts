import { Module } from '@nestjs/common';
import { SocketController } from './socket.controller';
import { SocketService } from './socket.service';
import { UtilsService } from '@app/utils';

@Module({
  imports: [],
  controllers: [SocketController],
  providers: [SocketService, UtilsService],
})
export class SocketModule {}
