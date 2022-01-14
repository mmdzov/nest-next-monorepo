import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private AppService: AppService) {}

  @Get()
  @Render('index')
  home() {
    return {
      title: 'ok',
    };
  }
}
