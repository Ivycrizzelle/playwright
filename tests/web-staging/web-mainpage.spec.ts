import { test } from "../../fixture/object_fixture";
import { expect } from "@playwright/test";

import TestMainpage from "../../page-objects/web-mainpage-page";

test.describe(`test web-mainpage-page`, () => {
  test.beforeEach(async ({ page, testMainpage }) => {
    await testMainpage.gotoUrl();
  });

  test(`member Click Casino play here CTA`, async ({ page, testMainpage }) => {
    await page.getByRole("button", { name: "PLAY HERE" }).isVisible();
    await page.getByRole("button", { name: "PLAY HERE" }).click();
    // await page.waitForTimeout(5000);
    await expect(page).toHaveURL(`https://web-staging.aonewallet.com/casino`);
    await expect(
      page.locator('div[class= "image-gallery-swipe"]')
    ).toBeVisible();
  });
  test(`member Click Virtual Sport bet here CTA`, async ({
    page,
    testMainpage,
  }) => {
    await page
      .getByRole("listitem")
      .filter({
        hasText:
          "VIRTUAL SPORTSEnter BetVision’s virtual world, the next best thing to betting on",
      })
      .getByRole("button", { name: "BET HERE" })
      .click();

    await expect(page).toHaveURL(
      `https://web-staging.aonewallet.com/virtual-sports`
    );
  });
  test(`member Click RTP hyper link`, async ({ page, testMainpage }) => {
    await page.getByRole("link", { name: "RTP" }).isVisible();
    await page.getByRole("link", { name: "RTP" }).click();
    // await page.waitForTimeout(5000);
    await expect(page).toHaveURL(`https://web-staging.aonewallet.com/rtp`);
    await expect(
      page.getByRole("heading", { name: "RETURN TO PLAYER (RTP)" })
    ).toBeVisible();
  });
  test(`member Click Help centre hyper link`, async ({
    page,
    testMainpage,
  }) => {
    await page.getByRole("link", { name: "Help Centre" }).isVisible();
    await page.getByRole("link", { name: "Help Centre" }).click();
    // await page.waitForTimeout(5000);
    await expect(page).toHaveURL(
      `https://web-staging.aonewallet.com/help-centre`
    );
    await expect(
      page.getByRole("heading", { name: "HELP CENTRE" })
    ).toBeVisible();
  });
  test(`member Click Casino Tab`, async ({ page, testMainpage }) => {
    await page.getByText("Casino", { exact: true }).isVisible();
    await page.getByText("Casino", { exact: true }).click();
    // await page.waitForTimeout(5000);
    await expect(
      page.locator('div[class = "image-gallery-content bottom"]')
    ).toBeVisible();

    await expect(page).toHaveURL(`https://web-staging.aonewallet.com/casino`);
  });
  test(`member Click sportsbook Tab`, async ({ page, testMainpage }) => {
    await page.getByText("Sportsbook", { exact: true }).isVisible();
    await page.getByText("Sportsbook", { exact: true }).click();
    // await page.waitForTimeout(5000);

    await expect(page).toHaveURL(
      `https://web-staging.aonewallet.com/sportsbook`
    );
  });
  test(`Member Click Virtual Sports Tab`, async ({ page }) => {
    await page.getByText("Virtual Sports", { exact: true }).isVisible();
    await page.getByText("Virtual Sports", { exact: true }).click();
    // await page.waitForTimeout(5000);
    await expect(page).toHaveURL(
      `https://web-staging.aonewallet.com/virtual-sports`
    );
  });
  test(`Member Click live Games Tab`, async ({ page, testMainpage }) => {
    await page.getByText("Live Games").isVisible();
    await page.getByText("Live Games").click();
    // await page.waitForTimeout(5000);
    await expect(page).toHaveURL(
      `https://web-staging.aonewallet.com/live-games`
    );
  });

  test(`Member Click Safer Gaming Tab`, async ({ page, testMainpage }) => {
    await page.locator("a").filter({ hasText: "Safer Gaming" }).isVisible();
    await page.locator("a").filter({ hasText: "Safer Gaming" }).click();
    // await page.waitForTimeout(5000);
    await expect(page).toHaveURL(
      `https://web-staging.aonewallet.com/responsible-gambling`
    );
    await expect(page.getByRole("img", { name: "Safer Gaming" })).toBeVisible();
  });
  test(`Member Click Features Tab`, async ({ page, testMainpage }) => {
    await page.getByText("Features", { exact: true }).isVisible();
    await page.getByText("Features", { exact: true }).click();
    // await page.waitForTimeout(5000);
    await expect(page).toHaveURL(`https://web-staging.aonewallet.com/features`);
    await expect(page.getByRole("img", { name: "Acca Boost" })).toBeVisible();
    await expect(page.getByRole("img", { name: "Bet Builder" })).toBeVisible();
    await expect(page.getByRole("img", { name: "Cash Out" })).toBeVisible();
  });
});
