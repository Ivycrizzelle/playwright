import { expect, Locator, Page } from '@playwright/test';


export default class Testlogout {
    page : Page;
    loginbtn : Locator;
    alert: Locator;
    uname: Locator;
    pword: Locator;
    confirmbtn: Locator;
    unamefb: Locator;
    pwordfb: Locator;
    profile: Locator
    logoutbtn: Locator

    constructor(page: Page){
        this.page = page;
        this.loginbtn = this.page.locator('//button[text()="Login"]')
        this.alert = this.page.locator('#chakra-toast-manager-top')
        this.uname = this.page.locator('input[id="field-14"]')
        this.pword = this.page.locator('input[id="field-15"]')
        this.confirmbtn = this.page.getByRole('button', { name: 'Login' })
        this.unamefb = this.page.locator('dialog[id="field-14-feedback"]');
        this.pwordfb = this.page.locator('dialog[id="field-15-feedback"]');
        this.profile = this.page.getByRole('button', { name: 'Profile Options' });
        this.logoutbtn = this.page.getByRole('button', { name: 'Logout' });
    ;
};
async Logout(){
    await this.profile.isVisible();
    await this.profile.click();
    await this.logoutbtn.isVisible();
    await this.logoutbtn.click();

}

}