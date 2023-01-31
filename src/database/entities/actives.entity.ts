import { CategoriesEntity } from './categories.entity';
import {
  Entity,
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import { CompanyTypeEnum } from '../enums/company-type.enum';

@Entity({ name: 'actives' })
export class ActivesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'company_code', length: 6 })
  companyCode: string;

  @Column({ name: 'company_name', length: 500 })
  companyName: string;

  @Column({ name: 'type' })
  type: CompanyTypeEnum;

  @OneToOne(() => CategoriesEntity)
  @JoinColumn({ name: 'category' })
  category: CategoriesEntity;
}
