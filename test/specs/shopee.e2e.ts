import MainPage from '../pageobjects/main.page'

describe('Shopee UI testing', () => {

    before(async () => {
        await MainPage.open()
        await MainPage.maximize()
    })

    it('Check language change', async () => {
    })
    
    it('Validate help category', async () => {
    })
    
    it('Search for most expensive toy items', async () => {

    })

    after(async () => {
        await MainPage.close()
    })
})


