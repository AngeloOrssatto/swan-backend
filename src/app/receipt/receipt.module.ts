import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivesEntity } from 'src/database/entities/actives.entity';
import { CategoriesEntity } from 'src/database/entities/categories.entity';
import { ReceiptsEntity } from 'src/database/entities/receipts.entity';
import { ReceiptController } from './receipt.controller';
import { ReceiptService } from './receipt.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReceiptsEntity, ActivesEntity, CategoriesEntity]),
  ],
  controllers: [ReceiptController],
  providers: [ReceiptService],
  exports: [ReceiptService],
})
export class ReceiptModule {}
