import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivesEntity } from 'src/database/entities/actives.entity';
import { CategoriesEntity } from 'src/database/entities/categories.entity';
import { ActiveController } from './active.controller';
import { ActiveService } from './active.service';

@Module({
  imports: [TypeOrmModule.forFeature([ActivesEntity, CategoriesEntity])],
  controllers: [ActiveController],
  providers: [ActiveService],
  exports: [ActiveService],
})
export class ActiveModule {}
