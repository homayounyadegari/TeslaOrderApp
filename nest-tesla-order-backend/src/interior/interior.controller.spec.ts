import { Test, TestingModule } from '@nestjs/testing';
import { InteriorController } from './interior.controller';
import { InteriorService } from './interior.service';

describe('InteriorController', () => {
  let controller: InteriorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InteriorController],
      providers: [InteriorService],
    }).compile();

    controller = module.get<InteriorController>(InteriorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
