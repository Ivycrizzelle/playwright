import { test } from '../../fixture/object_fixture';
import { expect } from '@playwright/test';
import { beforeEach } from 'node:test';

import testlogin from '../../page-objects/log-in-page';
import Testlogin from '../../page-objects/log-in-page';
import Testlogout from '../../page-objects/log-out-page';

test('User can log out',async ({page, testlogin, testlogout}) => {
    // const log = new testlogin(page);
    await testlogin.goto();
    await testlogin.Log();
    await testlogin.ValidCred();
    await testlogout.Logout()
    // await testlogin.confirmbtn.click();
    await expect(testlogin.alert).toHaveText('Successfully Logged out');

})