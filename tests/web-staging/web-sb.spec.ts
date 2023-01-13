import { test } from '../../fixture/object_fixture';
import { expect } from '@playwright/test';
import { beforeEach } from 'node:test';


import TestSafe from '../../page-objects/web-sb-page';



test('Admin can redirect to Safe Gaming page',async ({page, testSb}) => {
 
  await testSb.goto();
  await expect(page).toHaveURL('http://web-staging.aonewallet.com/responsible-gambling');  
  
});

test('Admin can click Todays event CTA ', async({page, testSb}) => {
  await testSb.goto();
  await page.getByRole('link', { name: 'Today\'s Events' }).isVisible();
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: 'Today\'s Events' }).click();
  await expect(page).toHaveURL(`http://web-staging.aonewallet.com/sportsbook`);
  
});

test('Admin can click find out more in understanding gambling ', async({page, testSb}) => {
  await testSb.goto();
  await page.getByText('Find Out More').first().click();
  await expect(page).toHaveURL(`http://web-staging.aonewallet.com/responsible-gambling/understanding-gambling`);  
});

test('Admin can click find out more in Track your activity ', async({page, testSb}) => {
  await testSb.goto();
  await page.getByText('Find Out More').nth(1).isVisible();
  await page.getByText('Find Out More').nth(1).click();
  await expect(page).toHaveURL(`http://web-staging.aonewallet.com/responsible-gambling/track-your-activity`);  
});
test('Admin can click find out more in Limit your gaming ', async({page, testSb}) => {
  await testSb.goto();
  await page.getByText('Find Out More').nth(2).isVisible();
  await page.getByText('Find Out More').nth(2).click();
  await expect(page).toHaveURL(`http://web-staging.aonewallet.com/responsible-gambling/limit-your-gaming`);  
});
test('Admin can click find out more in Problem Gaming ', async({page, testSb}) => {
  await testSb.goto();
  await page.getByText('Find Out More').nth(3).isVisible();
  await page.getByText('Find Out More').nth(3).click();
  await expect(page).toHaveURL(`http://web-staging.aonewallet.com/responsible-gambling/problem-gambling`);  
});
test('Admin can click find out more in Tips & Support ', async({page, testSb}) => {
  await testSb.goto();
  await page.getByText('Find Out More').nth(4).isVisible();
  await page.getByText('Find Out More').nth(4).click();
  await expect(page).toHaveURL(`http://web-staging.aonewallet.com/responsible-gambling/support`);  
});
