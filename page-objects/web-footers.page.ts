import { expect, Locator, Page } from "@playwright/test";

export default class TestFooters {
  page: Page;

  SITEINFORMATION: Locator;

  footer: Locator;
  footer2: Locator;
  Betvision: Locator;
  AboutUs: Locator;
  ContactUs: Locator;
  PrivacyPolicy: Locator;
  Depositandwithdrawal: Locator;
  RTPs: Locator;

  constructor(page: Page) {
    this.page = page;

    this.footer = this.page.locator(`//div[@class='chakra-container']`);
    this.footer2 = this.page.locator(`//div[@class='chakra-container']`);

    this.Betvision = this.page.getByText(
      "BetVision is powered by TGP Europe Ltd of 22A Castle Street, Douglas, Isle of Ma"
    );

    this.SITEINFORMATION = page.getByRole("heading", {
      name: "SITE INFORMATION",
    });
    this.AboutUs = page.getByText("About Us");
    this.ContactUs = page.getByText("About Us");
    this.PrivacyPolicy = page.getByText("Privacy Policy");
    this.Depositandwithdrawal = page.getByText("Deposit & Withdrawals");
    this.RTPs = page.getByText("RTPs");
  }

  async gotoUrl() {
    await this.page.goto("https://web-staging.aonewallet.com");
    await this.page.getByRole("button", { name: "Accept cookies" }).isVisible();
    await this.page.getByRole("button", { name: "Accept cookies" }).click();
  }
}
