/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateWheelDto } from './dto/create-wheel.dto';
import { UpdateWheelDto } from './dto/update-wheel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Wheel } from './entities/wheel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WheelService {

  constructor(
    @InjectRepository(Wheel)
    private readonly wheelRepository : Repository<Wheel>,
  ){}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createWheelDto: CreateWheelDto) {
    return 'This action adds a new wheel';
  }

  findAll() {
    return this.wheelRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} wheel`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateWheelDto: UpdateWheelDto) {
    return `This action updates a #${id} wheel`;
  }

  remove(id: number) {
    return `This action removes a #${id} wheel`;
  }
}
