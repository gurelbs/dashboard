// src/config/config.module.ts

import { Global, Module } from '@nestjs/common';
import config from './config';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: config,
    }
  ],
  exports: [ConfigService],
})
export class ConfigModule {}