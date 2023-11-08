import { Module } from '@nestjs/common';
import { FibiController } from './fibi/fibi.controller';
import { FibiService } from './fibi/fibi.service';

@Module({
  providers: [FibiService],
  controllers: [FibiController],
})
export class AssetsModule {}
