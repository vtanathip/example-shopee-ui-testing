import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    
    private _languageButtonSelector: string = "";

    /**
     * define selectors using getter methods
     */
    public get languageButton(){
        return $(this._languageButtonSelector);
    }

    public get startSellingButton(){
        return $('');
    }

    public get bannerModal(): ChainablePromiseElement{
        return $('')
    }

    public get bannerCloseButton(): string{
        return ''
    }

    /**
     * define selectors using setter methods
     */
    private set chooseLangauge(index: number){
        this._languageButtonSelector = `div[class="language-selection__list"] > div:nth-child(${index}) > button`;
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async switchLanguage (language: number) {
        this.chooseLangauge = language;
        await (await this.bannerModal).click();
    }
    
    public async checkStartSellingButton(): Promise<string> {
        return await (await this.startSellingButton).getAlertText();
    }

    public async closeBanner(): Promise<void> {
        await (await (await this.bannerModal).shadow$(this.bannerCloseButton)).click()
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

export default new MainPage();
