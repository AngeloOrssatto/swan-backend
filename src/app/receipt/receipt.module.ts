import { Module } from '@nestjs/common';
import { ReceiptService } from './receipt.service';

@Module({
  providers: [ReceiptService],
})
export class ReceiptModule {}
