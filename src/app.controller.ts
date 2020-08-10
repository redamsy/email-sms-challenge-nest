import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()//everything like this is a decorator
export class AppController {
  constructor(private readonly appService: AppService) {}//this is called dependency injection and the service class should be defined injectable

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
