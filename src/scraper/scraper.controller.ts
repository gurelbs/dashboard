import { Controller, Get } from '@nestjs/common';
import { FibiController } from 'assets/fibi/fibi.controller';

@Controller()
export class ScraperController {
  constructor(private fibiController: FibiController) {}

  @Get('fibi')
  async fetchFibiData() {
    return await this.fibiController.fibiData();
  }

  // async fetchAssetData(assetName: string) {
  // }

  // async fetchAll() {

  // }
}
