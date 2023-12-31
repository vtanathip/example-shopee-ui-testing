/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public async open (path: string = "https://www.shopee.co.th") {
        return await browser.url(path)
    }

    public async maximize () {
        await browser.maximizeWindow()
    }

    public async close() {
        await browser.closeWindow()
    }
}
