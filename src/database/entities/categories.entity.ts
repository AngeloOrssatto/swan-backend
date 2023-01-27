import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;
}
