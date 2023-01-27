import { RegisterService } from './register.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Get('register')
  getHello(): string {
    return 'register';
  }
}
