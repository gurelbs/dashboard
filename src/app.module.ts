import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScraperService } from '@scraper/scraper.service';
import { ScraperController } from '@scraper/scraper.controller';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@config/config.module';
import { AssetsModule } from '@assets/assets.module';

@Module({
  imports: [ConfigModule, AssetsModule],
  controllers: [AppController, ScraperController],
  providers: [
    AppService,
    ConfigService,
  ],
  exports: [ConfigService],
})
export class AppModule {}
