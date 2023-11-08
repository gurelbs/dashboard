import { Module } from '@nestjs/common';
import { FibiController, FibiService } from '@fibi/index';

@Module({
  providers: [FibiService],
  controllers: [FibiController],
})
export class AssetsModule {}
