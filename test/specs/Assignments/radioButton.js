const { assert } = require("chai")

describe('radioButton',async()=>{
    it('clickonTwo',async()=>{
        await browser.url('https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/')
        await expect(browser).toHaveTitleContaining('jQuery Mobile')
        await browser.maximizeWindow()
        var clickOnRadioButton=await $('//label[@for="radio-choice-0b"]')
       await clickOnRadioButton.click()
       await clickOnRadioButton.isSelected()
       
    })
})
