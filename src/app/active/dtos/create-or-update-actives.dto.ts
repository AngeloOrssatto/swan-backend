import { IsNotEmpty, Length } from 'class-validator';
import { CategoriesEntity } from 'src/database/entities/categories.entity';
import { CompanyTypeEnum } from 'src/database/enums/company-type.enum';

export class CreateOrUpdateActiveDto {
  @IsNotEmpty()
  @Length(4, 6)
  companyCode: string;

  @IsNotEmpty()
  companyName: string;

  @IsNotEmpty()
  type: CompanyTypeEnum;

  @IsNotEmpty()
  category: CategoriesEntity;
}
