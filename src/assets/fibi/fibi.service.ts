import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GlobalEnv } from '@config/interfaces';
import type { Page, Browser } from 'puppeteer';
import { scraperConfig } from '@scraper/scraper.config';
import { ScraperService } from '@scraper/scraper.service';

@Injectable()
export class FibiService {
  constructor(
    @Inject(ConfigService) private config: GlobalEnv,
    @Inject(ScraperService) private browser: Browser,
  ) {}

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
    const [page] = await this.browser.pages();
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
      await this.browser.close();
    }
  }

  public async getFibiData() {
    return await this.fibiScraper();
  }
}
