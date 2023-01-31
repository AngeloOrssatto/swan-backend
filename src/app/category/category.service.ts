import { NotFoundException } from '@nestjs/common/exceptions';
import { CreateOrUpdateCategoryDto } from './dtos/create-or-update-category.dto';
import { CategoriesEntity } from './../../database/entities/categories.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoriesEntity)
    private readonly categoriesRepository: Repository<CategoriesEntity>,
  ) {}

  async findAll() {
    return await this.categoriesRepository.find({
      select: ['id', 'name'],
    });
  }

  async findOneById(id: string) {
    try {
      return await this.categoriesRepository.findOneBy({ id: id });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateOrUpdateCategoryDto) {
    const category = this.categoriesRepository.create(data);
    return await this.categoriesRepository.save(category);
  }

  async update(id: string, data: CreateOrUpdateCategoryDto) {
    const category = await this.categoriesRepository.findOneBy({ id: id });
    this.categoriesRepository.merge(category, data);
    return await this.categoriesRepository.save(category);
  }

  async destroy(id: string) {
    await this.categoriesRepository.findOneBy({ id: id });
    this.categoriesRepository.softDelete({ id });
  }
}
