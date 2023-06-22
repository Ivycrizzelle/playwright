import { test } from "../../fixture/object_fixture";
import { expect } from "@playwright/test";

import TestSafer from "../../page-objects/web-footers2-page";

test.describe(`test web-safer-page`, () => {
  test.beforeEach(async ({ page, testSafer }) => {
    await testSafer.gotoUrl();
  });

  test(`Safer gaming page`, async ({ page, testSafer }) => {
    //URL
    await expect(page).toHaveURL(/.*responsible-gambling/);
    await expect(page.locator(`(//img[@data-nimg='fill'])[3]`)).toBeVisible();
    await page.getByRole("heading", { name: "Safer Gaming" }).click();
    //TimeZone
    await page.locator(`//a[contains(text(),'Safer Gaming')]`).click();
    await expect(page.locator(`div > select`).last()).toBeVisible();
    //Button
    await page.getByRole(`button`, { name: `Safer Gaming` }).click();
    await expect(
      page.getByText(
        "HomeUnderstanding GamblingProblem GamblingPlay Safe ToolsSocial Responsibility"
      )
    ).toBeVisible();
    await page.getByRole("button", { name: "Play Safe" }).click();
    await expect(
      page.getByText(
        "Track Your ActivityLimit Your GamingBudget CalculatorTime OutSelf Exclusion"
      )
    ).toBeVisible();
    await page.getByRole("button", { name: "Support" }).click();
    await expect(
      page.getByText("Support & TipsUnderage GamblingHelpful Organisations")
    ).toBeVisible();
  });
  test(`Help Centre links`, async ({ page, testSafer }) => {
    await page.getByRole("link", { name: "Help Centre" }).click();
    await expect(page).toHaveURL(/.*help-centre/);
  });
  test(`Understanding Gambling`, async ({ page }) => {
    await page
      .locator(
        `(//h5[text()='UNDERSTANDING GAMBLING']/following-sibling::p)[2]`
      )
      .click();
    await expect(page).toHaveURL(/.*understanding-gambling/);
  });
  test(`Track your Activity`, async ({ page, testSafer }) => {
    await page
      .locator(`(//h5[text()='TRACK YOUR ACTIVITY']/following-sibling::p)[2]`)
      .click();
    await expect(page).toHaveURL(/.*track-your-activity/);
  });
  test(`Limit your Gambling`, async ({ page, testSafer }) => {
    await page
      .locator(`(//h5[text()='LIMIT YOUR GAMING']/following-sibling::p)[2]`)
      .click();
    await expect(page).toHaveURL(/.*limit-your-gaming/);
  });
  test(`Problem Gambling`, async ({ page, testSafer }) => {
    await page
      .locator(`(//h5[text()='PROBLEM GAMBLING']/following-sibling::p)[2]`)
      .click();
    await expect(page).toHaveURL(/.*problem-gambling/);
  });
  test(`Support and Tips`, async ({ page, testSafer }) => {
    await page
      .locator(`(//h5[text()='SUPPORT & TIPS']/following-sibling::p)[2]`)
      .click();
    await expect(page).toHaveURL(/.*support/);
  });
  test(`Today's Events`, async ({ page, testSafer }) => {
    await page.locator(`a`, { hasText: `Today's Events` }).click();
    await expect(page).toHaveURL(/.*sportsbook/);
  });
  test(`Feature link`, async ({ page, testSafer }) => {
    await page.locator(`p > a`, { hasText: `Features` }).click();
    await expect(page).toHaveURL(/.*features/);
  });
});
