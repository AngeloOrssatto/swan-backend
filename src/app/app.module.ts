import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActiveModule } from './active/active.module';
import { CategoryModule } from './category/category.module';
import { ReceiptModule } from './receipt/receipt.module';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '666ricoestamos',
      name: 'swan',
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
