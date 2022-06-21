describe('disable',async()=>{
    it('disableElement',async()=>{
        await browser.url('D:/TEST YANTRA/Js script/WebDriver IO/test/specs/popups/disableElement.html')
        await browser.maximizeWindow()

        var fname=await $('//input[@id="fname"]')
        await fname.setValue('Lava')

        var getfname=await fname.getValue()
        console.log(getfname);

        var lname=await $('//input[@id="lname"]')
        // await lname.setValue('kumar')
        await browser.execute((lnameValue)=>{
            document.getElementById('lname').setAttribute('value',lnameValue)
        }, "Kumar")

        var lnameValue=await lname.getValue()
        console.log(lnameValue);
        // await browser.debug()


    })
})