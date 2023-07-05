import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HelpPage extends Page {
    
    private _languageButtonSelector: string = "";

    /**
     * define selectors using getter methods
     */
    private get helpButton(): ChainablePromiseElement{
        return $('')
    }

    private get helpCategories(){
        return $$('')
    }
    
    private get helpHeader(){
        return $('div[class^="category_entry"] > h2[class^="title__"]')
    }

    /**
     * define selectors using setter methods
     */

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async openHelpSuport() {
        await (await this.helpButton).click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0])
        await browser.waitUntil(async ()=>{
           return await browser.getTitle() == "Shopee Help Centers"
        },{timeout:10000})
        await (await this.helpHeader).waitForExist({ timeout: 15000 });
    }
    
    public async getCategories(): Promise<number>{
        return (await this.helpCategories).length
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }

    public async maximize(): Promise<void> {
        super.maximize();
    }

    public async close(): Promise<void>{
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0])
    }
}

export default new HelpPage();
