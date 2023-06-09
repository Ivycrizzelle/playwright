import { expect, Locator, Page } from "@playwright/test";

export default class TestFeatures {
  page: Page;

  Readmore1: Locator;
  Login1: Locator;
  Readmore2: Locator;
  Login2: Locator;
  Readmore3: Locator;
  Login3: Locator;
  loginmodal: Locator;
  Features: Locator;

  constructor(page: Page) {
    this.page = page;
    this.Readmore1 = page.getByRole("link", { name: "Read More" }).first();
    this.Login1 = page.getByRole("link", { name: "Read More" }).first();

    this.Readmore2 = page.getByRole("link", { name: "Read More" }).nth(1);
    this.Login2 = page.getByRole("button", { name: "Login" }).nth(2);
    this.Readmore3 = page.getByRole("link", { name: "Read More" }).nth(2);

    this.Login3 = page.getByRole("button", { name: "Login" }).nth(3);
    this.loginmodal = page.locator("#chakra-modal--header-4");
    this.Features = page.getByRole("link", { name: "Features" });
  }

  async gotoUrl() {
    await this.page.goto("https://web-staging.aonewallet.com/features");
    await this.page.getByRole("button", { name: "Accept cookies" }).isVisible();
    await this.page.getByRole("button", { name: "Accept cookies" }).click();
  }
}
