import { test } from "../../fixture/object_fixture";
import { expect } from "@playwright/test";

import TestFeatures from "../../page-objects/test-features-page";

test.describe(`test web-features-page`, () => {
  test.beforeEach(async ({ page, testFeatures }) => {
    await testFeatures.gotoUrl();
  });

  test(`User can click readmore1`, async ({ page, testFeatures }) => {
    await testFeatures.Readmore1.isVisible();
    await testFeatures.Readmore1.click();
    await expect(page).toHaveURL(
      `https://web-staging.aonewallet.com/features/acca-boost`
    );
  });
  test(`User can click login1`, async ({ page, testFeatures }) => {
    await testFeatures.Login1.isVisible();
    await testFeatures.Login1.click();
    // await expect(`("#chakra-modal--header-4")`);
    await page.locator("#chakra-modal--header-4").isVisible();
  });
  test(`User can click readmore2`, async ({ page, testFeatures }) => {
    await testFeatures.Readmore2.isVisible();
    await testFeatures.Readmore2.click();
    //   await page.waitForTimeout(5000);
    await expect(page).toHaveURL(
      `https://web-staging.aonewallet.com/features/bet-builder`
    );
  });
  test(`User can click login2`, async ({ page, testFeatures }) => {
    await testFeatures.Login2.isVisible();
    await testFeatures.Login2.click();
    //   await page.waitForTimeout(5000);
    await page.locator("#chakra-modal--header-4").isVisible();
  });

  test(`User can click readmore3`, async ({ page, testFeatures }) => {
    await testFeatures.Readmore3.isVisible();
    await testFeatures.Readmore3.click();
    //   await page.waitForTimeout(5000);
    await expect(page).toHaveURL(
      `https://web-staging.aonewallet.com/features/cash-out`
    );
  });

  test(`User can click login3`, async ({ page, testFeatures }) => {
    await testFeatures.Login3.isVisible();
    await testFeatures.Login3.click();
    //   await page.waitForTimeout(5000);
    await page.locator("#chakra-modal--header-4").isVisible();
  });
});
