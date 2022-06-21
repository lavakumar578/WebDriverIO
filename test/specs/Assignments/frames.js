const { assert } = require("chai")

describe('frames',async()=>{
    it('frames handling',async()=>{
        await browser.url('https://chercher.tech/practice/frames')
        await expect(browser).toHaveTitleContaining('Frames')
        await browser.maximizeWindow()
        var frame1=await $('//iframe[@id="frame1"]')
        await browser.switchToFrame(frame1)
        var msg=await $('//input')
        var getmsg=await $("//input")
        await msg.setValue('hello morning')
        var result=await getmsg.getValue()
        await assert.equal(result, 'hello morning', 'msg is not equal');
        
        
    
        var frame3=await $('//iframe[@id="frame3"]')
        await browser.switchToFrame(frame3)
        var selectCheckBox=await $('//input')
        await selectCheckBox.click()
        
        
        
        await browser.switchToFrame(null)
     
        var frame2=await $('//iframe[@id="frame2"]')
        await browser.switchToFrame(frame2)
        var selectAnimal=await $('//body/b[text()="Animals :"]/../select[@id="animals"]')
        await selectAnimal.selectByVisibleText('Avatar')
        await browser.pause(2000)
        
        console.log(result);

    })
})