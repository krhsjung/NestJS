import { NestFactory } from '@nestjs/core';
import { SocketModule } from './socket.module';

async function bootstrap() {
  const app = await NestFactory.create(SocketModule);
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
