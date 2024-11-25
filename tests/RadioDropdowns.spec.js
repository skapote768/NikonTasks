const {test,expect} = require('@playwright/test');

test('Check Radio Button and Dropdowns',async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

const maleradio = await page.locator('#male');

await maleradio.check();

await expect(maleradio).toBeChecked();

const dropdown = page.locator('#country');

await dropdown.selectOption({value:"japan"});

await page.waitForTimeout(3000);
});