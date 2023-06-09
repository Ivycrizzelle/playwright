import { expect, Locator, Page } from "@playwright/test";

export default class TestFooters {
  page: Page;

  twittericon: Locator;
  Gamstopicon: Locator;
  Ibasicon: Locator;
  commisionicon: Locator;
  Gamcareicon: Locator;
  Safeandsecureicon: Locator;
  Over18icon: Locator;

  constructor(page: Page) {
    this.page = page;
    {
    }

    (this.twittericon = this.page.getByRole("link", { name: "twitter" })),
      (this.Gamstopicon = this.page.getByRole("link", { name: "gamecare" })),
      (this.Ibasicon = this.page.getByText(
        "BetVision is powered by TGP Europe Ltd of 22A Castle Street, Douglas, Isle of Ma"
      ));

    (this.commisionicon = this.page.getByRole("link", {
      name: "gambling-commission",
    })),
      (this.Gamcareicon = this.page.getByRole("link", { name: "gamecare" })),
      (this.Safeandsecureicon = this.page.getByRole("img", {
        name: "Safe and Secure",
      })),
      (this.Over18icon = this.page.getByRole("img", { name: "Over 18" })),
      {};
  }

  async gotoUrl() {
    await this.page.goto("https://web-staging.aonewallet.com");
    await this.page.getByRole("button", { name: "Accept cookies" }).isVisible();
    await this.page.getByRole("button", { name: "Accept cookies" }).click();
  }
}
