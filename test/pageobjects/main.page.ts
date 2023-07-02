import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async language (language: string) {
        
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }

    public maximize(): void {
        super.maximize();
    }
}

export default new LoginPage();
