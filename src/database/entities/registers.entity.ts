import { UsersEntity } from './users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RegistersTypeEnum } from '../enums/registers-type.enum';
import { ActivesEntity } from './actives.entity';

@Entity()
export class RegistersEntity {
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
  type: RegistersTypeEnum;

  @ManyToOne(() => UsersEntity)
  @JoinColumn()
  user: UsersEntity;
}
