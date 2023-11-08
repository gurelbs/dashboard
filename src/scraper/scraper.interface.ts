import type { PuppeteerLaunchOptions, GoToOptions } from 'puppeteer';

interface Classes {
  [element: string]: string;
}

interface SelectorConfig {
  fibi: {
    login: Classes;
    mainContentDiv: string;
  };
}

export interface ScraperConfig {
  puppeteerOptions: PuppeteerLaunchOptions;
  selectors: SelectorConfig;
  goToOptions: GoToOptions;
}

export interface FibiEnv {
  url: string;
  username: string;
  password: string;
}
