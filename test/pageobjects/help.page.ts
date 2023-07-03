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
        return $('div[class="navbar__help-center-icon"]')
    }

    private get helpCategories(){
        return $$('div[class^="category_item__"]')
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
        await browser.switchWindow("Help Center")
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
        super.close();
    }
}

export default new HelpPage();
