import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, IsDate } from 'class-validator';
import { hashSync } from 'bcrypt';

@Entity({ name: 'users' })
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'username' })
  username: string;

  @Column({ name: 'email' })
  @IsEmail()
  email: string;

  @Column({ name: 'password' })
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @IsDate()
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  @IsDate()
  deletedAt: Date;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
