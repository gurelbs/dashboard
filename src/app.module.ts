import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScraperService } from './scraper/scraper.service';
import { ScraperController } from './scraper/scraper.controller';
import { ConfigService } from '@nestjs/config';
import config from './config/config';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [AppController, ScraperController],
  providers: [AppService, ScraperService, { provide: ConfigService, useFactory: () => config}],
  exports: [ConfigService]
})
export class AppModule {}
