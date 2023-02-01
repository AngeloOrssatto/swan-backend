import { IsDate, IsInt } from 'class-validator';
import { UsersEntity } from './users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RegistersTypeEnum } from '../enums/registers-type.enum';
import { ActivesEntity } from './actives.entity';

@Entity({ name: 'registers' })
export class RegistersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => ActivesEntity)
  @JoinColumn({ name: 'active' })
  active: ActivesEntity;

  @Column({ name: 'quantity' })
  @IsInt()
  quantity: number;

  @Column({ name: 'value' })
  value: number;

  @Column({ name: 'date' })
  @IsDate()
  date: Date;

  @Column({ name: 'type' })
  type: RegistersTypeEnum;

  @CreateDateColumn({ name: 'created_at' })
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @IsDate()
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  @IsDate()
  deletedAt: Date;

  @ManyToOne(() => UsersEntity)
  @JoinColumn({ name: 'user' })
  user: UsersEntity;
}
