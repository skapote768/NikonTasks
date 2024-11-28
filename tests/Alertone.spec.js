const { chromium,test,expect } = require('@playwright/test');

test('dialogbox', async ({page})=> {

    await page.goto('https://www.flipkart.com/');

    await page.waitForTimeout(3000);

    await page.locator('span._30XB9F').click();

    await page.locator('input.Pke_EE').fill('iphone');

});