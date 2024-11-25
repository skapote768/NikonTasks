const{test,expect} = require('@playwright/test');

test('Search and Click on 2nd last option',async ({page})=> {

await page.goto('https://www.flipkart.com/');

await page.locator('input.Pke_EE').fill('iphone 16');

await page.waitForTimeout(3000);

const items = await page.$$('//li[@class="_3D0G9a"]//div//a');

for (const a of items ) {
    const eachtext = await a.innerText();
    console.log(eachtext);
}

await page.locator('(//li[@class="_3D0G9a"]//div//a)[8]').click();

await page.waitForTimeout(2000);

await page.locator(`(//div[contains(@class,'cPHDOP')]/div[@class="_75nlfW"]/div/div/a)[1]`).click();

await page.waitForTimeout(2000);

});