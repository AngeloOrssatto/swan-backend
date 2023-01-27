import { Module } from '@nestjs/common';
import { ActiveService } from './active.service';

@Module({
  providers: [ActiveService],
})
export class ActiveModule {}
