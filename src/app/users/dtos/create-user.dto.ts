import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { MessagesHelper } from './../../helpers/messages.helpers';
import { RegExHelper } from './../../helpers/regex.helper';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(RegExHelper.password, { message: MessagesHelper.PASSWORD_VALID })
  password: string;
}
