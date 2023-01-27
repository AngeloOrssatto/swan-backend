import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActiveModule } from './active/active.module';
import { CategoryModule } from './category/category.module';
import { ReceiptModule } from './receipt/receipt.module';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      name: process.env.DATABASE_NAME,
      synchronize: true, //only for dev
      entities: [__dirname + '**/*.entity{.ts, .js}'],
    }),
    ActiveModule,
    CategoryModule,
    ReceiptModule,
    RegisterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
