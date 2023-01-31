import { UsersEntity } from './users.entity';
import {
  Column,
  CreateDateColumn,
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
  quantity: number;

  @Column({ name: 'value' })
  value: number;

  @Column({ name: 'date' })
  date: Date;

  @Column({ name: 'type' })
  type: RegistersTypeEnum;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => UsersEntity)
  @JoinColumn({ name: 'user' })
  user: UsersEntity;
}
