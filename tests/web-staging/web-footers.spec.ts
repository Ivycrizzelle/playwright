import { test } from "../../fixture/object_fixture";
import { expect } from "@playwright/test";

import TestFooters from "../../page-objects/web-footers.page";

test.describe(`test web-footers-page`, () => {
  test.beforeEach(async ({ page, testFooters }) => {
    await testFooters.gotoUrl();
  });

  test(`Footer SITE INFORMATION cta About Us`, async ({
    page,
    testFooters,
  }) => {
    await page.locator(`//h3[text()='SITE INFORMATION']`).isVisible();
    await page.locator(`//p[text()='About Us']`).click();
    await expect(page).toHaveURL(`https://web-staging.aonewallet.com/aboutus`);
    await expect(
      page.getByText(
        "BetVision is powered by TGP Europe Ltd of 22A Castle Street, Douglas, Isle of Ma"
      )
    ).toBeVisible();
  });
  test(`Footer SITE INFORMATION cta Contact Us`, async ({
    page,
    testFooters,
  }) => {
    await page.locator(`//h3[text()='SITE INFORMATION']`).isVisible();
    await page.locator(`//p[text()='Contact Us']`).click();
    await expect(page).toHaveURL(
      `https://web-staging.aonewallet.com/contact-us`
    );
    await expect(
      page.getByText(
        "BetVision is powered by TGP Europe Ltd of 22A Castle Street, Douglas, Isle of Ma"
      )
    ).toBeVisible();
  });
  test(`Footer SITE INFORMATION cta Privacy Policy`, async ({
    page,
    testFooters,
  }) => {
    await page.locator(`//h3[text()='SITE INFORMATION']`).isVisible();
    await page.locator(`//p[text()='Privacy Policy']`).click();
    await expect(page).toHaveURL(
      `https://web-staging.aonewallet.com/privacy-policy`
    );
    await expect(
      page.getByText(
        "BetVision is powered by TGP Europe Ltd of 22A Castle Street, Douglas, Isle of Ma"
      )
    ).toBeVisible();
  });

  test(`Footer SITE INFORMATION cta Deposit & Withdrawals`, async ({
    page,
    testFooters,
  }) => {
    await page.locator(`//h3[text()='SITE INFORMATION']`).isVisible();
    await page.locator(`//p[text()='Deposit & Withdrawals']`).click();
    await expect(page).toHaveURL(
      `https://web-staging.aonewallet.com/depositandwithdrawal`
    );
    await expect(
      page.getByText(
        "BetVision is powered by TGP Europe Ltd of 22A Castle Street, Douglas, Isle of Ma"
      )
    ).toBeVisible();
  });
});
