import { ScraperConfig } from './scraper.interface';

export const scraperConfig: ScraperConfig = {
  puppeteerOptions: {
    slowMo: 15,
    devtools: false,
    headless: false,
    args: [
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-first-run',
      '--no-sandbox',
      '--no-zygote',
    ],
  },
  selectors: {
    fibi: {
      login: {
        openFormBtn: '.links li:nth-child(2)',
        loginFormDiv: '#login iframe',
        usernameInput: '#username',
        passwordInput: '#password',
        continueBtn: '#continueBtn',
      },
      mainContentDiv: '.main_content',
    },
  },
  goToOptions: {
    waitUntil: 'networkidle2',
  },
};
