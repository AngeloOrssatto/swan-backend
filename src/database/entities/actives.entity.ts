import { CategoriesEntity } from './categories.entity';
import {
  Entity,
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { Length, IsDate } from 'class-validator';
import { CompanyTypeEnum } from '../enums/company-type.enum';

@Entity({ name: 'actives' })
export class ActivesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'company_code' })
  @Length(4, 6)
  companyCode: string;

  @Column({ name: 'company_name' })
  companyName: string;

  @Column({ name: 'type' })
  type: CompanyTypeEnum;

  @ManyToOne(() => CategoriesEntity)
  @JoinColumn({ name: 'category' })
  category: CategoriesEntity;

  @CreateDateColumn({ name: 'created_at' })
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @IsDate()
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  @IsDate()
  deletedAt: Date;
}
