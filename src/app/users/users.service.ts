import { UsersEntity } from './../../database/entities/users.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async findOne(username: string): Promise<UsersEntity> {
    const user = await this.usersRepository.findOne({
      where: {
        username: username,
      },
    });
    return user;
  }

  async getAll(): Promise<UsersEntity[]> {
    const users = await this.usersRepository
      .createQueryBuilder()
      .select('users')
      .from(UsersEntity, 'users')
      .getMany();

    return users;
  }
}
