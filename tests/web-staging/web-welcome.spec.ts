import { test } from "../../fixture/object_fixture";
import { expect } from "@playwright/test";
import { beforeEach } from "node:test";

import TestWelcome from "../../page-objects/web-welcome-page";

test(`User can click BET HERE1`, async ({ page, testWelcome }) => {
  await testWelcome.gotoUrl();
  await testWelcome.Bethere1.isVisible();
  await testWelcome.Bethere1.click();
  await page.waitForTimeout(5000);
  await expect(page).toHaveURL(
    `https://web-staging.aonewallet.com/sportsbook#/prelive`
  );
});

test(`User can click PLAY HERE`, async ({ page, testWelcome }) => {
  await testWelcome.gotoUrl();
  await testWelcome.Playhere.isVisible();
  await testWelcome.Playhere.click();
  // await page.waitForTimeout(5000);
  await expect(page).toHaveURL(`https://web-staging.aonewallet.com/casino`);
});

test(`User can click BET HERE2`, async ({ page, testWelcome }) => {
  await testWelcome.gotoUrl();
  await testWelcome.Bethere2.isVisible();
  await testWelcome.Bethere2.click();
  await page.waitForTimeout(5000);
  await expect(page).toHaveURL(
    `https://web-staging.aonewallet.com/virtual-sports#/virtualsport/vflm`
  );
});

test(`User can click safergaming`, async ({ page, testWelcome }) => {
  await testWelcome.gotoUrl();
  await testWelcome.Safergamingbanner.isVisible();
  await testWelcome.Safergamingbanner.click();
  await expect(page).toHaveURL(
    `https://web-staging.aonewallet.com/responsible-gambling?utm_source=Safer-Gambling&utm_medium=On-Site&utm_campaign=Home-Page-SG`
  );
});
