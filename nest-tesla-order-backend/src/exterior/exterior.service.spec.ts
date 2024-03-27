import { Test, TestingModule } from '@nestjs/testing';
import { ExteriorService } from './exterior.service';

describe('ExteriorService', () => {
  let service: ExteriorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExteriorService],
    }).compile();

    service = module.get<ExteriorService>(ExteriorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
