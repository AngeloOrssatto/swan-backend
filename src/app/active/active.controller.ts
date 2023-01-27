import { ActiveService } from './active.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class ActiveController {
  constructor(private readonly activeService: ActiveService) {}

  @Get('active')
  getHello(): string {
    return 'active';
  }
}
