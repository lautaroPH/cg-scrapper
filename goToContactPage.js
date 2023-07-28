import { logSuccess } from './log.js';
import { captureScreenshot } from './captureScreenshot.js';
import { CONTACT_PAGE_URL } from './urls.js';

export async function goToContactPage(page) {
  await page.click(`a[href="${CONTACT_PAGE_URL}"]`);
  logSuccess('Clicked on contact page');

  await captureScreenshot(
    page,
    'screenshot-contact.png',
    'Took a screenshot of contact page',
  );
}
