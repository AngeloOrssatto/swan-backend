import { CategoriesEntity } from './categories.entity';
import {
  Entity,
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import { CompanyTypeEnum } from '../enums/company-type.enum';

@Entity()
export class ActivesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 6 })
  companyCode: string;

  @Column({ length: 500 })
  companyName: string;

  @Column()
  type: CompanyTypeEnum;

  @OneToOne(() => CategoriesEntity)
  @JoinColumn()
  category: CategoriesEntity;
}
