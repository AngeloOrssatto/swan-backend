import { RegistersEntity } from './../database/entities/registers.entity';
import { ReceiptsEntity } from './../database/entities/receipts.entity';
import { CategoriesEntity } from './../database/entities/categories.entity';
import { ActivesEntity } from './../database/entities/actives.entity';
import { UsersEntity } from './../database/entities/users.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActiveModule } from './active/active.module';
import { CategoryModule } from './category/category.module';
import { ReceiptModule } from './receipt/receipt.module';
import { RegisterModule } from './register/register.module';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (ConfigService: ConfigService) => ({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME,
        synchronize: true, //only for dev
        // entities: [__dirname + '**/*.entity{.ts, .js}'],
        entities: [
          ActivesEntity,
          CategoriesEntity,
          ReceiptsEntity,
          RegistersEntity,
          UsersEntity,
        ],
      }),
      inject: [ConfigService],
    }),
    ActiveModule,
    CategoryModule,
    ReceiptModule,
    RegisterModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
