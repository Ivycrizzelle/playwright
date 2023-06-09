import { expect, Locator, Page } from "@playwright/test";

export default class TestWelcome {
  page: Page;

  Welcome: Locator;
  Safergamingbanner: Locator;
  Bethere1: Locator;
  Playhere: Locator;
  Bethere2: Locator;

  constructor(page: Page) {
    this.page = page;
    this.Safergamingbanner = this.page.getByRole("link", {
      name: "Safer Gaming",
    });
    this.Welcome = this.page.locator(`//img[@alt='welcome']`);
    this.Bethere1 = this.page
      .getByRole("listitem")
      .filter({
        hasText:
          "SPORTSBOOKBetVision provides a range of top sports and the biggest leagues & eve",
      })
      .getByRole("button", { name: "BET HERE" });
    this.Playhere = this.page.getByRole("button", { name: "PLAY HERE" });
    this.Bethere2 = this.page
      .getByRole("listitem")
      .filter({
        hasText:
          "VIRTUAL SPORTSEnter BetVision’s virtual world, the next best thing to betting on",
      })
      .getByRole("button", { name: "BET HERE" });
  }

  async gotoUrl() {
    await this.page.goto("http://web-staging.aonewallet.com");
  }
}
