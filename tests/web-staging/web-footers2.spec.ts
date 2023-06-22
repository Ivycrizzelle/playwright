import { test } from "../../fixture/object_fixture";
import { expect } from "@playwright/test";

import TestFooters2 from "../../page-objects/web-footers2-page";

test.describe(`test web-footers2-page`, () => {
  test.beforeEach(async ({ page, testFooters2 }) => {
    await testFooters2.gotoUrl();
  });

  test(`Click twitter icon `, async ({ page, testFooters2 }) => {
    const [popup] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "twitter" }).click(),
    ]);

    // Navigate to the Twitter page
    await popup.goto("https://twitter.com/BetVisionsports");

    // Check that the URL is correct
    expect(popup.url()).toBe("https://twitter.com/BetVisionsports");
  });

  test(`Click Gamstop icon `, async ({ page, testFooters2 }) => {
    const [popup] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "gamestop" }).click(),
    ]);
    // Navigate to the page
    await popup.goto("https://www.gamstop.co.uk/");

    // Check that the URL is correct
    expect(popup.url()).toBe("https://www.gamstop.co.uk/");
  });
  test(`Click Ibas icon`, async ({ page, testFooters2 }) => {
    const [popup] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "ibas" }).click(),
    ]);
    // Navigate to the page
    await popup.goto("https://www.ibas-uk.com");

    // Check that the URL is correct
    expect(popup.url()).toBe("https://www.ibas-uk.com/");
  });
  test(`Click Gambling commision icon`, async ({ page, testFooters2 }) => {
    const [popup] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "gambling-commission" }).click(),
    ]);
    // Navigate to the page
    await popup.goto(
      "https://www.gamblingcommission.gov.uk/public-register/business/detail/38898"
    );

    // Check that the URL is correct
    expect(popup.url()).toBe(
      "https://www.gamblingcommission.gov.uk/public-register/business/detail/38898"
    );
  });
  test(`Click Gamcare icon`, async ({ page, testFooters2 }) => {
    const [popup] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "gamecare" }).click(),
    ]);
    // Navigate to the page
    await popup.goto("https://www.gamcare.org.uk/");

    // Check that the URL is correct
    expect(popup.url()).toBe("https://www.gamcare.org.uk/");
  });
  test(`Click Safe and secure icon`, async ({ page, testFooters2 }) => {
    page.getByRole("img", { name: "Safe and Secure" }).click(),
      await expect(page).toHaveURL(
        `https://web-staging.aonewallet.com/safeandsecure`
      );
    await expect(
      page.getByRole("heading", {
        name: "SAFE AND SECURE TRANSACTIONS",
      })
    ).toBeVisible();
  });
  test(`Click Over 18 icon`, async ({ page, testFooters2 }) => {
    page.getByRole("img", { name: "Over 18" }).click(),
      await expect(page).toHaveURL(
        `https://web-staging.aonewallet.com/responsible-gambling`
      );
    await expect(page.getByRole("img", { name: "Safer Gaming" })).toBeVisible();
  });
});
