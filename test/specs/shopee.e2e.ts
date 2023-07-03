import MainPage from '../pageobjects/main.page'

describe('Shopee UI testing', () => {

    before(async () => {
        await MainPage.open()
        await MainPage.maximize()
    })

    it('Check language change', async () => {
        let expectedText = 'Start Selling';
        let actualText = '';
        await MainPage.switchLanguage(2);
        await MainPage.closeBanner();
        actualText = await MainPage.checkStartSellingButton();
        expect(actualText).toEqual(expectedText);
    })
    
    it('Validate help category', async () => {

    })
    
    it('Search for most expensive toy items', async () => {

    })

    after(async () => {
        await MainPage.close()
    })
})


