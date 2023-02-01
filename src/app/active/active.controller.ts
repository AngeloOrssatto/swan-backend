import { ActiveService } from './active.service';
import {
  Controller,
  Get,
  UseGuards,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/strategies/jwt/jwt-auth.guard';
import { ParseUUIDPipe } from '@nestjs/common/pipes';
import { CreateOrUpdateActiveDto } from './dtos/create-or-update-actives.dto';

@Controller('api/v1/actives')
@UseGuards(JwtAuthGuard)
export class ActiveController {
  constructor(private readonly activeService: ActiveService) {}

  @Get()
  async index() {
    return await this.activeService.findAll();
  }

  @Post()
  async store(@Body() body: CreateOrUpdateActiveDto) {
    return await this.activeService.store(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.activeService.findOneById(id);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: CreateOrUpdateActiveDto,
  ) {
    return await this.activeService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.activeService.destroy(id);
  }
}
