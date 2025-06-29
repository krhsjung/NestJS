import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { UtilsService } from '@app/utils';

@Module({
  imports: [],
  controllers: [ApiController],
  providers: [ApiService, UtilsService],
})
export class ApiModule {}
