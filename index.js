import puppeteer from 'puppeteer';
import { logError, logSuccess } from './log.js';
import { captureScreenshot } from './captureScreenshot.js';
import { BASE_URL } from './urls.js';
import { SCREENSHOT_DELAY } from './screenshotDelay.js';
import { goToContactPage } from './goToContactPage.js';
import { fillContactForm } from './fillContactForm.js';
import { submitContactForm } from './submitContactForm.js';

async function navigateWebPage() {
  const browser = await puppeteer.launch({
    slowMo: SCREENSHOT_DELAY,
    headless: false,
  });

  try {
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    await page.setViewport({ width: 1660, height: 1024 });
    logSuccess('Page opened');

    await captureScreenshot(
      page,
      'screenshot-home.png',
      'Took a screenshot of home page',
    );

    await goToContactPage(page);
    await fillContactForm(page);
    await submitContactForm(page);

    await browser.close();
  } catch (error) {
    logError(`An error occurred: ${error.message}`);
    await browser.close();
  }
}

navigateWebPage();
