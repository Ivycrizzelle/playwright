import { expect, Locator, Page } from "@playwright/test";

export default class TestSafer {
  page: Page;

  Safergamingpage: Locator;
  HelpCentrelinks: Locator;
  UnderstandingGambling: Locator;
  TrackyourActivity: Locator;
  LimityourGambling: Locator;
  ProblemGambling: Locator;
  SupportandTips: Locator;
  TodaysEvents: Locator;
  Featurelink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.Safergamingpage = this.page.locator(
      `//a[contains(text(),'Safer Gaming')]`
    );
    this.HelpCentrelinks = this.page.getByRole("link", { name: "Help Centre" });
    this.UnderstandingGambling = this.page.locator(
      `(//h5[text()='UNDERSTANDING GAMBLING']/following-sibling::p)[2]`
    );
    this.TrackyourActivity = this.page.locator(
      `(//h5[text()='TRACK YOUR ACTIVITY']/following-sibling::p)[2]`
    );
    this.LimityourGambling = this.page.locator(
      `(//h5[text()='LIMIT YOUR GAMING']/following-sibling::p)[2]`
    );
    this.ProblemGambling = this.page.locator(
      `(//h5[text()='PROBLEM GAMBLING']/following-sibling::p)[2]`
    );
    this.SupportandTips = this.page.locator(
      `(//h5[text()='SUPPORT & TIPS']/following-sibling::p)[2]`
    );
    this.TodaysEvents = this.page.locator(`a`, { hasText: `Today's Events` });
    this.Featurelink = this.page.locator(`p > a`, { hasText: `Features` });
  }

  async gotoUrl() {
    await this.page.goto(
      "https://web-staging.aonewallet.com/responsible-gambling"
    );
    await this.page.getByRole("button", { name: "Accept cookies" }).isVisible();
    await this.page.getByRole("button", { name: "Accept cookies" }).click();
  }
}
