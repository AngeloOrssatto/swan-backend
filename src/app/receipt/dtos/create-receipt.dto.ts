import { IsNotEmpty, IsString } from 'class-validator';
import { CreateOrUpdateReceiptRequestDto } from './create-or-update-receipt-request.dto';

export class CreateReceiptDto extends CreateOrUpdateReceiptRequestDto {
  @IsNotEmpty()
  @IsString()
  userId: string;
}
