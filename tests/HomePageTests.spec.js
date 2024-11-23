//Nikon HomePage tests
const { chromium,test,expect } = require('@playwright/test');

test('Check Website Title', async () => {
const browser = await chromium.launch(
    {headless:false}
);

const page = await browser.newPage();
  
await page.goto('https://www.nikon.com'); 
const pageTitle = await page.title();
await expect(page).toHaveTitle(pageTitle);
console.log(pageTitle);
const pageUrl = await page.url();
await expect(page).toHaveURL(pageUrl);

});
