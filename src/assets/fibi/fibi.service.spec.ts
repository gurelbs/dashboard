import { Test, TestingModule } from '@nestjs/testing';
import { FibiService } from './fibi.service';

describe('FibiService', () => {
  let service: FibiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FibiService],
    }).compile();

    service = module.get<FibiService>(FibiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
