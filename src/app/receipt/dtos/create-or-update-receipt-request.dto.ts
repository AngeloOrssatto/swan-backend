import { ActivesEntity } from 'src/database/entities/actives.entity';
import {
  IsNotEmpty,
  IsInt,
  IsNumber,
  IsDate,
  IsString,
  IsDateString,
} from 'class-validator';
import { ReceiptsTypeEnum } from 'src/database/enums/receipts-type.enum';

export class CreateOrUpdateReceiptRequestDto {
  @IsNotEmpty()
  active: ActivesEntity;

  @IsNotEmpty()
  @IsInt()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsNotEmpty()
  @IsString()
  type: ReceiptsTypeEnum;
}
