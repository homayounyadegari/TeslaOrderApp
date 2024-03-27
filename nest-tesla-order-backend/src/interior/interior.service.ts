/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateInteriorDto } from './dto/create-interior.dto';
import { UpdateInteriorDto } from './dto/update-interior.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Interior } from './entities/interior.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InteriorService {
  constructor(
    @InjectRepository(Interior)
    private readonly interiorRepository : Repository<Interior>,
  ){}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createInteriorDto: CreateInteriorDto) {
    return 'This action adds a new interior';
  }

  findAll() {
    return this.interiorRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} interior`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateInteriorDto: UpdateInteriorDto) {
    return `This action updates a #${id} interior`;
  }

  remove(id: number) {
    return `This action removes a #${id} interior`;
  }
}
