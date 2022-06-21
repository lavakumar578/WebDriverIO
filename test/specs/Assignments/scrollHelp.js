describe('Amazon',async()=>{
    it('scrollTillHelp',async()=>{
        await browser.url('https://www.amazon.in/')
        await expect(browser).toHaveTitleContaining('Online')
        await browser.maximizeWindow()

        var help=await $('//a[text()="Help"]')
        await help.scrollIntoView()
    })
})