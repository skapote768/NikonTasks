const { chromium,test,expect } = require('@playwright/test');

test('Check Search functionality', async () => {

    const browser = await chromium.launch(
        {headless:false}
    );

    const page = await browser.newPage();

    await page.goto('https://www.nikon.com'); 
    const pageTitle = await page.title();
    await expect(page).toHaveTitle(pageTitle);
    console.log(pageTitle);

    const search=await page.locator('a.header__search-button').click();
    const searchbox = await page.locator('input#searchKeyword').fill("camera");
    await page.keyboard.press('Enter');

    const element = page.locator('h2.c-heading-b');
    await expect(element).toHaveText("Result Pages");
    await page.close();

});

