import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WheelService } from './wheel.service';
import { CreateWheelDto } from './dto/create-wheel.dto';
import { UpdateWheelDto } from './dto/update-wheel.dto';

@Controller('wheel')
export class WheelController {
  constructor(private readonly wheelService: WheelService) {}

  @Post()
  create(@Body() createWheelDto: CreateWheelDto) {
    return this.wheelService.create(createWheelDto);
  }

  @Get()
  findAll() {
    return this.wheelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wheelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWheelDto: UpdateWheelDto) {
    return this.wheelService.update(+id, updateWheelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wheelService.remove(+id);
  }
}
