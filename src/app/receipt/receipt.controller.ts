import { ReceiptService } from './receipt.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
  Request,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/strategies/jwt/jwt-auth.guard';
import { CreateOrUpdateReceiptRequestDto } from './dtos/create-or-update-receipt-request.dto';
import { CreateReceiptDto } from './dtos/create-receipt.dto';

@Controller('api/v1/receipts')
@UseGuards(JwtAuthGuard)
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}

  @Get()
  async index(@Request() req) {
    return await this.receiptService.findAll(req.user);
  }

  @Post()
  async store(@Body() body: CreateOrUpdateReceiptRequestDto, @Request() req) {
    const data: CreateReceiptDto = {
      ...body,
      userId: req.user.id,
    };
    return await this.receiptService.store(data);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.receiptService.findOneById(id);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: CreateOrUpdateReceiptRequestDto,
  ) {
    return await this.receiptService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.receiptService.destroy(id);
  }
}
