import { captureScreenshot } from './captureScreenshot.js';
import { formData } from './formData.js';
import { logSuccess } from './log.js';

export async function fillContactForm(page) {
  await page.type('form input[name="your-name"]', formData.name);
  logSuccess('Typed name');
  await page.type('form input[name="your-email"]', formData.email);
  logSuccess('Typed email');
  await page.type('form input[name="your-subject"]', formData.subject);
  logSuccess('Typed subject');
  await page.type('form textarea[name="your-message"]', formData.message);
  logSuccess('Typed message');
  await page.type('form input[name="captcha-636"]', formData.captcha);
  logSuccess('Typed captcha');

  await captureScreenshot(
    page,
    'screenshot-contact-form.png',
    'Took a screenshot of contact form',
  );
}
