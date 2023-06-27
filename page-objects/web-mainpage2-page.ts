import { expect, Locator, Page } from "@playwright/test";

export default class TestWebmain {
  page: Page;

  Welcome: Locator;
  Circle1: Locator;
  Circle2: Locator;
  Circle3: Locator;
  Circle4: Locator;

  constructor(page: Page) {
    this.page = page;

    this.Welcome = this.page.getByRole("img", { name: "welcome" });
  }
  async AssertionOfText() {
    await expect(this.page.getByRole("img", { name: "welcome" })).toBeVisible();
    await expect(
      this.page.getByRole("heading", {
        name: "BETVISION ONLINE SPORTSBOOK & CASINO",
      })
    ).toBeVisible();

    await expect(
      this.page.getByText(
        "Welcome to BetVision, a provider of online Sportsbook, Casino & Virtual gaming s"
      )
    ).toBeVisible();
    await expect(
      this.page.getByRole("list").filter({
        hasText:
          "SPORTSBOOKBetVision provides a range of top sports and the biggest leagues & eve",
      })
    ).toBeVisible();
    await expect(
      this.page.getByRole("link", { name: "Safer Gaming" })
    ).toBeVisible();
    await expect(this.page.getByRole("img", { name: "Email" })).toBeVisible();
    await expect(
      this.page.getByRole("link", { name: "Brand Logo" })
    ).toBeVisible();
    await expect(this.page.getByRole("img", { name: "VISA" })).toBeVisible();
    await expect(this.page.locator(".vendor-img")).toBeVisible();
    await expect(
      this.page.getByText(
        "SITE INFORMATIONAbout UsContact UsPrivacy PolicyDeposit & WithdrawalsRTPsTerms &"
      )
    ).toBeVisible();

    await expect(
      this.page
        .locator('[id="__next"] div')
        .filter({
          hasText:
            "BetVision is powered by TGP Europe Ltd of 22A Castle Street, Douglas, Isle of Ma",
        })
        .nth(4)
    ).toBeVisible();
  }
}
