/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ExteriorService } from './exterior.service';
import { ExteriorController } from './exterior.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exterior } from './entities/exterior.entity';
import { Order } from 'src/order/entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exterior,Order])],
  controllers: [ExteriorController],
  providers: [ExteriorService],
})
export class ExteriorModule {}
