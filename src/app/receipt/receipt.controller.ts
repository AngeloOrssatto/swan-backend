import { ReceiptService } from './receipt.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}

  @Get('receipt')
  getHello(): string {
    return 'receipt';
  }
}
