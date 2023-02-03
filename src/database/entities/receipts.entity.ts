import {
  IsNotEmpty,
  IsInt,
  IsNumber,
  IsString,
  IsDate,
  IsDecimal,
} from 'class-validator';
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
import { ReceiptsTypeEnum } from '../enums/receipts-type.enum';
import { ActivesEntity } from './actives.entity';

@Entity({ name: 'receipts' })
export class ReceiptsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ActivesEntity)
  @JoinColumn({ name: 'active' })
  @IsNotEmpty()
  active: ActivesEntity;

  @Column({ name: 'quantity' })
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @Column({ name: 'value' })
  @IsNotEmpty()
  value: number;

  @Column({ name: 'date' })
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @Column({ name: 'type' })
  @IsNotEmpty()
  @IsString()
  type: ReceiptsTypeEnum;

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
  @IsNotEmpty()
  @IsString()
  user: UsersEntity;
}
