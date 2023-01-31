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

  @OneToOne(() => ActivesEntity)
  @JoinColumn({ name: 'active' })
  active: ActivesEntity;

  @Column({ name: 'quantity' })
  quantity: number;

  @Column({ name: 'value' })
  value: number;

  @Column({ name: 'date' })
  date: Date;

  @Column({ name: 'type' })
  type: ReceiptsTypeEnum;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @ManyToOne(() => UsersEntity)
  @JoinColumn({ name: 'user' })
  user: UsersEntity;
}
