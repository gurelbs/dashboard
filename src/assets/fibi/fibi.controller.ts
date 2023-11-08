import { Controller, Get, Inject } from '@nestjs/common';
import { FibiService } from './fibi.service';

@Controller('fibi')
export class FibiController {
  constructor(@Inject(FibiService) private fibiService: FibiService) {}

  @Get()
  async fibiData() {
    return await this.fibiService.getFibiData();
  }
}
