/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository : Repository<Order>,
  ){}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // create(createOrderDto: CreateOrderDto) {
  //   return 'This action adds a new order';
  // }
  create(createUserDto: CreateUserDto) {
    return this.orderRepository.save(createUserDto);
  }

  findAll() {
    //return this.orderRepository.find();
    return this.orderRepository.find({
      relations: ['exterior', 'interior', 'wheel'], // Include optional relations
    });
  }

  findOne(id: number) {
    //return `This action returns a #${id} order`;

    const order = this.orderRepository.findOne({
      where: { id },
      relations: ['exterior', 'interior', 'wheel'], // Include optional relations
    });

    return order; 
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
