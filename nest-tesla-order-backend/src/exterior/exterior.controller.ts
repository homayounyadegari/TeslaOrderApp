/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExteriorService } from './exterior.service';
import { CreateExteriorDto } from './dto/create-exterior.dto';
import { UpdateExteriorDto } from './dto/update-exterior.dto';

@Controller('exterior')
export class ExteriorController {
  constructor(private readonly exteriorService: ExteriorService) {}

  @Post()
  create(@Body() createExteriorDto: CreateExteriorDto) {
    return this.exteriorService.create(createExteriorDto);
  }

  @Get()
  findAll() {
    return this.exteriorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exteriorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExteriorDto: UpdateExteriorDto) {
    return this.exteriorService.update(+id, updateExteriorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exteriorService.remove(+id);
  }
}
