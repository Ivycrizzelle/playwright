import { test as objectFixture } from "@playwright/test";
import { pathToFileURL } from "url";
import Testlogin from "../page-objects/log-in-page";
import Testlogout from "../page-objects/log-out-page";
import TestSafe from "../page-objects/web-sb-page";
import TestWelcome from "../page-objects/web-welcome-page";
import TestFeatures from "../page-objects/test-features-page";
import TestFooters from "../page-objects/web-footers.page";
import TestMainpage from "../page-objects/web-mainpage-page";
import TestMainpage2 from "../page-objects/web-mainpage2-page";
import TestFooters2 from "../page-objects/web-footers2-page";
import TestSafer from "../page-objects/web-safer-page";
type Pages = {
  testlogin: Testlogin;

  testSb: TestSafe;
  testlogout: Testlogout;
  testWelcome: TestWelcome;
  testFeatures: TestFeatures;
  testFooters: TestFooters;
  testMainpage2: TestMainpage2;
  testMainpage: TestMainpage;
  testFooters2: TestFooters2;
  testSafer: TestSafer;
};
const testObjects = objectFixture.extend<Pages>({
  testlogin: async ({ page }, use) => {
    await use(new Testlogin(page));
  },
  testSb: async ({ page }, use) => {
    await use(new TestSafe(page));
  },
  testlogout: async ({ page }, use) => {
    await use(new Testlogout(page));
  },

  testWelcome: async ({ page }, use) => {
    await use(new TestWelcome(page));
  },

  testFeatures: async ({ page }, use) => {
    await use(new TestFeatures(page));
  },

  testFooters: async ({ page }, use) => {
    await use(new TestFooters(page));
  },

  testMainpage: async ({ page }, use) => {
    await use(new TestMainpage(page));
  },

  testMainpage2: async ({ page }, use) => {
    await use(new TestMainpage2(page));
  },
  testFooters2: async ({ page }, use) => {
    await use(new TestFooters2(page));
  },
  testSafer: async ({ page }, use) => {
    await use(new TestSafer(page));
  },
});
export const test = testObjects;
