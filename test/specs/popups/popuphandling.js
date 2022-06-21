describe('alerHandling',async()=>{
    it('alert',async()=>{
        await browser.url('D:/TEST YANTRA/Js script/WebDriver IO/test/specs/popups/popupgeneration.html')
        

        var altpopup=await browser.getAlertText()
         console.log(altpopup)
       
        await browser.acceptAlert()

        var altpopup=await browser.getAlertText()
        console.log(altpopup)

        await browser.sendAlertText("something")
     

    })
})

// browser.getAlertText()
// browser.acceptAlert()
// browser.getAlertText()
// browser.sendAlertText()
//D:\TEST YANTRA\Js script\WebDriver IO\test\specs\popups\popupgeneration.html