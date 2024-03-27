/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateExteriorDto } from './dto/create-exterior.dto';
import { UpdateExteriorDto } from './dto/update-exterior.dto';
import { Exterior } from './entities/exterior.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExteriorService {
  constructor(
    @InjectRepository(Exterior)
    private readonly exteriorRepository : Repository<Exterior>,
  ){}
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createExteriorDto: CreateExteriorDto) {
    return 'This action adds a new exterior';
  }

  findAll() {
    return this.exteriorRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} exterior`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateExteriorDto: UpdateExteriorDto) {
    return `This action updates a #${id} exterior`;
  }

  remove(id: number) {
    return `This action removes a #${id} exterior`;
  }
}


