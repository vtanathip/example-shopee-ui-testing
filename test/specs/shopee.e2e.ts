import LoginPage from '../pageobjects/main.page'

describe('Shopee UI testing', () => {
    it('Check language change', async () => {
        await LoginPage.open()
        await LoginPage.maximize()
    })
})


