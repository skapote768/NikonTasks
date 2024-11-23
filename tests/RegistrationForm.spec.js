const {test,expect} = require('@playwright/test');

test('Check Registration form', async ({page})=> {

await page.goto('https://testautomationpractice.blogspot.com/');

await page.waitForTimeout(3000);

const values = ['Shantanu','s@k.com',String(8888888888),'Nashik'];

await page.locator('input#name').fill(values[0]);
await page.locator('input#email').fill(values[1]);
await page.locator('input#phone').fill(values[2]);
await page.locator('textarea#textarea').fill(values[3]);

await page.waitForTimeout(3000);

await page.close();

});