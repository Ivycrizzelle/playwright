import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://web-staging.aonewallet.com/");
  await page.getByRole("img", { name: "Email" }).click();
  await page.getByText("Forgot Password").click();
  await page.getByRole("button", { name: "Close" }).click();
  await page.getByRole("link", { name: "Brand Logo" }).click();
  await page.getByRole("img", { name: "Email" }).click();
});
