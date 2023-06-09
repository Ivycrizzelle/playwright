import { expect, Locator, Page } from "@playwright/test";

export default class TestMainpage {
  page: Page;

  Casinoplayhere: Locator;
  VirtualSportsbethere: Locator;
  RTP: Locator;
  HelpCentre: Locator;
  Casinotab: Locator;
  SportsbookTab: Locator;
  Livegamestab: Locator;
  SaferGaming: Locator;
  Virtualsports: Locator;
  FeaturesTab: Locator;
  sportsbookTab: Locator;

  constructor(page: Page) {
    this.page = page;

    this.Casinoplayhere = this.page.getByRole("button", { name: "PLAY HERE" });
    this.VirtualSportsbethere = this.page
      .getByRole("listitem")
      .filter({
        hasText:
          "VIRTUAL SPORTSEnter BetVision’s virtual world, the next best thing to betting on",
      })
      .getByRole("button", { name: "BET HERE" });
    this.RTP = this.page.getByRole("link", { name: "RTP" });
    this.HelpCentre = this.page.getByRole("link", { name: "Help Centre" });
    this.Casinotab = this.page.getByText("Casino", { exact: true });
    this.SportsbookTab = this.page.getByText("Sportsbook", { exact: true });
    this.Livegamestab = this.page.getByText("Live Games");
    this.SaferGaming = this.page
      .locator("a")
      .filter({ hasText: "Safer Gaming" });
    this.Virtualsports = this.page.getByText("Virtual Sports", { exact: true });
    this.FeaturesTab = this.page.getByText("Features", { exact: true });
    this.sportsbookTab = this.page
      .locator("a")
      .filter({ hasText: "Sportsbook" });
  }

  async gotoUrl() {
    await this.page.goto("http://web-staging.aonewallet.com/");
    await this.page.getByRole("button", { name: "Accept cookies" }).isVisible();
    await this.page.getByRole("button", { name: "Accept cookies" }).click();
  }
}
