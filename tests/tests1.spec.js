
const { chromium,test,expect } = require('@playwright/test');

test('Check Website Title', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
  
   const text1= await page.locator('input#field1').inputValue();


   await page.locator('//button[text()="Copy Text"]').dblclick();
   const text2= await page.locator('input#field2').inputValue();

  await expect(text1).toMatch(text2);
    
    });