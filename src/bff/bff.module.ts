import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BffService } from './bff.service';
import { BffController } from './bff.controller';

@Module({
  imports: [HttpModule],
  providers: [BffService],
  controllers: [BffController],
})
export class BffModule {}
