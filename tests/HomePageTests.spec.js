//Nikon HomePage tests
const { chromium,test,expect } = require('@playwright/test');

test('Check Website Title', async () => {
const browser = await chromium.launch({
headless:false
});

const page = await browser.newPage();
  
await page.goto('https://www.nikon.com'); 
const pageTitle = await page.title();
await expect(page).toHaveTitle(pageTitle);
console.log(pageTitle);
const pageUrl = await page.url();
await expect(page).toHaveURL(pageUrl);

});

test('check working of Search Functionality', async () => {
  const browser = await chromium.launch();
  
  const page = await browser.newPage();
    
  await page.goto('https://www.nikon.com');
  
  const inputElement = page.locator('.header__search-button');

  await inputElement.click(); // Focuses on the input element
  await inputElement.fill('camera');

  await page.keyboard.press('Enter');

  const element = page.locator('[title="Information | Camera / Camera Lens | Nikon Consumer"]');

  await expect(element).toHaveAttribute('title', 'Information | Camera / Camera Lens | Nikon Consumer');
  });

  