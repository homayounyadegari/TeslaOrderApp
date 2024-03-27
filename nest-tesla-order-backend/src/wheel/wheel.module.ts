/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { WheelService } from './wheel.service';
import { WheelController } from './wheel.controller';
import { Wheel } from './entities/wheel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/order/entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wheel,Order])],
  controllers: [WheelController],
  providers: [WheelService],
})
export class WheelModule {}
