/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { InteriorService } from './interior.service';
import { InteriorController } from './interior.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Interior } from './entities/interior.entity';
import { Order } from 'src/order/entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Interior,Order])],
  controllers: [InteriorController],
  providers: [InteriorService],
})
export class InteriorModule {}
