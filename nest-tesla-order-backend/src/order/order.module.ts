/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Exterior } from 'src/exterior/entities/exterior.entity';
import { Interior } from 'src/interior/entities/interior.entity';
import { Wheel } from 'src/wheel/entities/wheel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order,Exterior,Interior,Wheel])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
