import { logError, logWarning } from './log.js';
import { captureScreenshot } from './captureScreenshot.js';

export async function submitContactForm(page) {
  await page.click('form input[type="submit"][value="Enviar"]');
  await page.waitForSelector('span.wpcf7-not-valid-tip');
  await captureScreenshot(
    page,
    'screenshot-contact-form-submit.png',
    'Took a screenshot of contact form submit',
  );

  const errors = await page.evaluate(() => {
    const errorElements = document.querySelectorAll('span.wpcf7-not-valid-tip');
    return Array.from(errorElements, (errorElement) => errorElement.innerText);
  });
  logWarning(`Found ${errors.length} errors`);
  errors.forEach((error) => logError(error));
}
