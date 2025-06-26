import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';
import { UtilsService } from '@app/utils';

@Controller()
export class ApiController {
  constructor(
    private readonly apiService: ApiService,
    private readonly utilsService: UtilsService,
  ) {}

  @Get()
  getHello(): string {
    return this.utilsService.getHelloAPI();
  }
}
