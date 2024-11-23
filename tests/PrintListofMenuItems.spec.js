const {test,expect} = require('@playwright/test');

test('Print List of Menu Items', async ({page})=> {

await page.goto('https://www.nikon.com/');

const items = await page.locator(`//li[contains(@class,'header__utility__link')]//a`).allTextContents();

console.log(items);

await page.close();

});