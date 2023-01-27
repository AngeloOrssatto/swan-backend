import { CategoryService } from './category.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('category')
  getHello(): string {
    return 'category';
  }
}
