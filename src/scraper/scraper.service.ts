import { Inject, Injectable } from '@nestjs/common';
import puppeteer, { Page } from 'puppeteer';
import { scraperConfig } from './scraper.config';
import { ConfigService } from '@nestjs/config';
import { GlobalEnv } from 'config/interfaces';

@Injectable()
export class ScraperService {
  constructor(@Inject(ConfigService) private config: GlobalEnv) {};

  private async init() {
    return await puppeteer.launch(scraperConfig.puppeteerOptions);
  }

  private async fibiLogin(page: Page) {

    
    const { login } = scraperConfig.selectors.fibi;
    const { fibi } = this.config.assets;
    await page.goto(fibi.url, scraperConfig.goToOptions);
    await page.click(login.openFormBtn);

    const iframe = await page.$(login.loginFormDiv);
    const frame = await iframe.contentFrame();
    const un = await frame.$(login.usernameInput);
    

    await un.type(fibi.username);
    await frame.type(login.passwordInput, fibi.password);
    await frame.click(login.continueBtn);
  }

  private async fibiScraper() {
    const scraper = await this.init();
    const [page] = await scraper.pages();
    try {
      page.on('error', (err) => console.log(err));
      return await this.fibiLogin(page).then(async () => {
        const res = await page.waitForNavigation();
        const { mainContentDiv } = scraperConfig.selectors.fibi;
        if (!res.ok() || !(await page.$(mainContentDiv))) return null;
        return await page.$eval(mainContentDiv, (el) => el.innerHTML);
      });
    } catch (error) {
      console.error(error);
    } finally {
      await scraper.close();
    }
  }

  public async getFibiData() {
    return await this.fibiScraper();
  }
}

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
