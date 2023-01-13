import { expect, Locator, Page } from '@playwright/test';


export default class TestSafe {
    page : Page;
    sgbtn:Locator;
    psbtn: Locator;
    sbtn: Locator;
    

    constructor(page: Page){
        this.page = page;
        this.sbtn = this.page.getByRole('button', { name: 'Safer Gaming' });
        this.psbtn = this.page.locator(`button#menu-button-22`);
        this.sbtn = this.page.locator(`button#menu-button-29`);

};
async goto () {
        await this.page.goto('http://web-staging.aonewallet.com')
        await this.page.getByRole('link', { name: 'Safer Gaming' }).isVisible();
        await this.page.getByRole('link', { name: 'Safer Gaming' }).click();
};
async safegaming()  {
    await this.sbtn.isVisible();
    await this.sbtn.click();   
    
} 


}