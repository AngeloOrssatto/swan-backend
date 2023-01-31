import { CategoryService } from './category.service';
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
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/strategies/jwt/jwt-auth.guard';
import { CreateOrUpdateCategoryDto } from './dtos/create-or-update-category.dto';

@Controller('api/v1/categories')
@UseGuards(JwtAuthGuard)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async index() {
    return await this.categoryService.findAll();
  }

  @Post()
  async store(@Body() body: CreateOrUpdateCategoryDto) {
    return await this.categoryService.store(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.categoryService.findOneById(id);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: CreateOrUpdateCategoryDto,
  ) {
    return await this.categoryService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.categoryService.destroy(id);
  }
}
