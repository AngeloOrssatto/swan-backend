import { UsersEntity } from './users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReceiptsTypeEnum } from '../enums/receipts-type.enum';
import { ActivesEntity } from './actives.entity';

@Entity()
export class ReceiptsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => ActivesEntity)
  @JoinColumn()
  active: ActivesEntity;

  @Column()
  quantity: number;

  @Column()
  value: number;

  @Column()
  date: Date;

  @Column()
  type: ReceiptsTypeEnum;

  @ManyToOne(() => UsersEntity)
  @JoinColumn()
  user: UsersEntity;
}
