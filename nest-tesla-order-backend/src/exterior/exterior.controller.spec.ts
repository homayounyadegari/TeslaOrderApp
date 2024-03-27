/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ExteriorController } from './exterior.controller';
import { ExteriorService } from './exterior.service';

describe('ExteriorController', () => {
  let controller: ExteriorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExteriorController],
      providers: [ExteriorService],
    }).compile();

    controller = module.get<ExteriorController>(ExteriorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
