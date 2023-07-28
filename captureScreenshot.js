import { logInfo } from './log.js';

export async function captureScreenshot(page, filename, message) {
  await page.screenshot({ path: `images/${filename}` });
  logInfo(message);
}
