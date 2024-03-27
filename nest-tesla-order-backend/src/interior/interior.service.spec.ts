import { Test, TestingModule } from '@nestjs/testing';
import { InteriorService } from './interior.service';

describe('InteriorService', () => {
  let service: InteriorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InteriorService],
    }).compile();

    service = module.get<InteriorService>(InteriorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
