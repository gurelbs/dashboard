import { Controller, Get } from '@nestjs/common';
import { ScraperService } from './scraper.service';
import { ConfigService } from '@nestjs/config';

@Controller('scraper')
export class ScraperController {
  constructor(
    private scraper: ScraperService,
  ) {}


  @Get('')
  links() {
    return `<a href="/scraper/fibi">fibi</a>`;
  }
  @Get('fibi')
  async scrapeFibi() {
    return await this.scraper.getFibiData();
  }
}
