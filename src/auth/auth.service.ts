import { UsersEntity } from './../database/entities/users.entity';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../app/users/users.service';
import { compareSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    let user: UsersEntity;
    try {
      user = await this.usersService.findOneByUsername(username);
    } catch (error) {
      return null;
    }
    const isPasswordValid = compareSync(pass, user.password);
    if (!isPasswordValid) {
      return null;
    }
    return user;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
