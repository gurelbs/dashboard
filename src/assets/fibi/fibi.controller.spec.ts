import { Test, TestingModule } from '@nestjs/testing';
import { FibiController } from './fibi.controller';

describe('FibiController', () => {
  let controller: FibiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FibiController],
    }).compile();

    controller = module.get<FibiController>(FibiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
