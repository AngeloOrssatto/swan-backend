import { NotFoundException } from '@nestjs/common/exceptions';
import { Repository } from 'typeorm';
import { CreateOrUpdateActiveDto } from './dtos/create-or-update-actives.dto';
import { Injectable } from '@nestjs/common';
import { ActivesEntity } from 'src/database/entities/actives.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ActiveService {
  constructor(
    @InjectRepository(ActivesEntity)
    private readonly activesRepository: Repository<ActivesEntity>,
  ) {}

  async findAll() {
    return await this.activesRepository.find({
      select: ['id', 'companyCode', 'companyName', 'type', 'category'],
    });
  }

  async findOneById(id: string) {
    try {
      return await this.activesRepository.findOneBy({ id: id });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateOrUpdateActiveDto) {
    const active = this.activesRepository.create(data);
    return await this.activesRepository.save(active);
  }

  async update(id: string, data: CreateOrUpdateActiveDto) {
    const active = await this.activesRepository.findOneBy({ id: id });
    this.activesRepository.merge(active, data);
    return await this.activesRepository.save(active);
  }

  async destroy(id: string) {
    await this.activesRepository.findOneBy({ id: id });
    this.activesRepository.softDelete({ id });
  }
}
