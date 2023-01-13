import { test as objectFixture } from '@playwright/test';
import { pathToFileURL } from 'url';
import Testlogin from '../page-objects/log-in-page';
import Testlogout from '../page-objects/log-out-page';
import TestSafe from '../page-objects/web-sb-page';




type Pages = {
    testlogin:  Testlogin;

    testSb: TestSafe;
    testlogout: Testlogout;
};
const testObjects = objectFixture.extend<Pages>({
    testlogin: async ({page}, use) => {
        await use (new Testlogin(page))
    },
     testSb:   async ({page}, use) => {
            await use (new TestSafe(page));
    } ,
    testlogout:   async ({page}, use) => {
        await use (new Testlogout(page));
} ,
}   

);
export const test = testObjects;