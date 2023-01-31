import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './../../database/entities/users.entity';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
