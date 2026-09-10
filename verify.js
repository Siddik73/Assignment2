const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const path = require('path');
  await page.goto(`file://${path.resolve('Index.html')}`);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'before.png' });
  await browser.close();
})();
