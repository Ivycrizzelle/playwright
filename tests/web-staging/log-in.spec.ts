import { test } from '../../fixture/object_fixture';
import { expect } from '@playwright/test';
import { beforeEach } from 'node:test';

import testlogin from '../../page-objects/log-in-page';
import Testlogin from '../../page-objects/log-in-page';


test('login using correct credentials',async ({page, testlogin}) => {
  // const log = new testlogin(page);
  await testlogin.goto();
  await testlogin.Log();
  await testlogin.ValidCred();
  // await testlogin.confirmbtn.click();
  await expect(testlogin.alert).toHaveText('Successfully Authenticated');
  
})
test('Log in using incorrect credentials in staging ', async({page, testlogin}) => {

  await testlogin.goto();
  await testlogin.Log();
  await page.fill('input[id="field-14"]', "sampe16");
  await page.fill('input[id="field-15"]', "Pdasdfqwf");
  await page.locator('button[type="submit"]').click();
  await expect(testlogin.alert).toHaveText('Your details have not been found. Please try again or click ‘Forgot Password’ to recover your details. Your account will become locked after 3 unsuccessful attempts.') 
});

test('Log in with no username',async ({page, testlogin}) => {

  const locator = page.locator('div[id="field-14-feedback"]');
  await testlogin.goto();
  await testlogin.Log();
  await page.fill('input[id="field-14"]', "");
  await page.fill('input[id="field-15"]', "Pdasdfqwf");
  await page.locator('button[type="submit"]').click();
  await expect(locator).toHaveText('Username is required');
})

test('Log in button without password', async({page, testlogin}) => {

  const locator = page.locator('div[id="field-15-feedback"]');

  await testlogin.goto();
  await testlogin.Log();
  await page.fill('input[id="field-14"]', "timeout15");
  await page.fill('input[id="field-15"]', "");
  await page.locator('button[type="submit"]').click();
  await expect(locator).toHaveText('Password is required');

}) 