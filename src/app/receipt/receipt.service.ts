import { CreateReceiptDto } from './dtos/create-receipt.dto';
import { NotFoundException } from '@nestjs/common/exceptions';
import { ReceiptsEntity } from './../../database/entities/receipts.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrUpdateReceiptRequestDto } from './dtos/create-or-update-receipt-request.dto';

@Injectable()
export class ReceiptService {
  constructor(
    @InjectRepository(ReceiptsEntity)
    private readonly receiptsRepository: Repository<ReceiptsEntity>,
  ) {}

  async findAll(user) {
    return await this.receiptsRepository.find({
      select: ['id', 'active', 'quantity', 'value', 'date', 'type'],
      where: {
        user: user.id,
      },
    });
  }

  async findOneById(id: string) {
    try {
      return await this.receiptsRepository.findOneBy({
        id: id,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateReceiptDto) {
    const receipt = this.receiptsRepository.create(data);
    return await this.receiptsRepository.save(receipt);
  }

  async update(id: string, data: CreateOrUpdateReceiptRequestDto) {
    const user = await this.receiptsRepository.findOneBy({ id: id });
    this.receiptsRepository.merge(user, data);
    return await this.receiptsRepository.save(user);
  }

  async destroy(id: string) {
    await this.receiptsRepository.findOneBy({ id: id });
    this.receiptsRepository.softDelete({ id });
  }
}
