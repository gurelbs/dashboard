import { Injectable } from '@nestjs/common';
import puppeteer, { Browser } from 'puppeteer';
import { scraperConfig } from './scraper.config';

@Injectable()
export class ScraperService {
  public browser!: Browser;

  constructor() {}

  async set() {
    this.browser = await puppeteer.launch(scraperConfig.puppeteerOptions);
  }

  async init() {
    if (!this.browser) this.set();
    return this.browser;
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }
}

// export class Scraper {
//   browser: Browser;

//   async set() {
//     this.browser = await puppeteer.launch(scraperConfig.puppeteerOptions);
//   }

//   async init() {
//     if (!this.browser) this.set();
//     return this.browser;
//   }

//   async close() {
//     if (this.browser) {
//       await this.browser.close();
//       this.browser = null;
//     }
//   }
// }

// {
// return await page.$eval('.main_content', el => el.outerHTML);
// const [branch, accountNumber] = await page.evaluate((el) =>
// Array.from(el.childNodes).map(({textContent}: HTMLElement) => textContent
//   .split('\n')
//   .filter( x => !!x)
//   .join('')
//   .split(':')[1]
// ), fibiDataElement);

// const data = { branch, accountNumber, date: new Date(), fibiDataElement};

// if (!!data) await fibiData.dispose();
// return data
// })
