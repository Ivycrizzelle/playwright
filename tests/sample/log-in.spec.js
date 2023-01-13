// @ts-checks
const { test, expect } = require('@playwright/test');

test('Log in using incorrect credentials in staging ', async({page}) => {

    const locator = page.locator('#chakra-toast-manager-top');

    await page.goto('http://web-staging.aonewallet.com/');
    await page.getByText('Login').click();
    await page.fill('input[id="field-14"]', "sampe16");
    await page.fill('input[id="field-15"]', "Pdasdfqwf");
    await page.locator('button[type="submit"]').click();
    await expect(locator).toHaveText('Your details have not been found. Please try again or click ‘Forgot Password’ to recover your details. Your account will become locked after 3 unsuccessful attempts.') 
  });

  test('Click Log in button without adding username', async({page}) => {

    const locator = page.locator('div[id="field-14-feedback"]');

    await page.goto('http://web-staging.aonewallet.com/');
    await page.getByText('Login').click();
    await page.fill('input[id="field-14"]', "");
    await page.fill('input[id="field-15"]', "password");
    await page.locator('button[type="submit"]').click();
    await expect(locator).toHaveText('Username is required');

  }) 

test('Click Log in button without adding password', async({page}) => {

    const locator = page.locator('div[id="field-15-feedback"]');

    await page.goto('http://web-staging.aonewallet.com/');
    await page.getByText('Login').click();
    await page.fill('input[id="field-14"]', "timeout15");
    await page.fill('input[id="field-15"]', "");
    await page.locator('button[type="submit"]').click();
    await expect(locator).toHaveText('Password is required');
})
test('Log in using correct credentials in staging', async({page}) => {

  const locator = page.locator('#chakra-toast-manager-top"]');

  await page.goto('http://web-staging.aonewallet.com/');
  await page.getByText('Login').click();
  await page.fill('input[id="field-14"]', "timeout15");
  await page.fill('input[id="field-15"]', "password");

  await page.locator('button[type="submit"]', {timeout: 5000}).click();
  await page.goto('http://web-staging.aonewallet.com/')
  await page.locator('#chakra-toast-manager-top').getByText('Successfully Authenticated').isVisible();
  // await expect(locator).toHaveText('Successfully Authenticated');
  });
