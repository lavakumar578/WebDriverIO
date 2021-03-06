describe('Automation',async()=>{
    it('practiceAutomation',async()=>{
        await browser.url('http://practice.automationtesting.in/')
        await browser.maximizeWindow()
        
        var demoSite=await $('//a[text()="Demo Site"]')
        await demoSite.click()
        await expect(browser).toHaveTitleContaining('Register')
        var enterFirstName=await $('//input[@placeholder="First Name"]')
        await enterFirstName.setValue('lava')
        var enterLastName=await $('//input[@placeholder="Last Name"]')
        await enterLastName.setValue('kumar')
        var address=await $('//textarea[@class="form-control ng-pristine ng-untouched ng-valid"]')
        await address.setValue('chittoor')
        var email=await $('//input[@type="email"]')
        await email.setValue('lavak@gmail.com')
        var phoneNum=await $('//input[@type="tel"]')
        await phoneNum.setValue(64546454644646)
        var gender=await $('//label[text()=" Male "]')
        await gender.click()
        var movies=await $('//input[@id="checkbox2"]')
        await movies.click()
        var scroll=await $('//button[@id="submitbtn"]')
        await scroll.scrollIntoView()

        var year=await $('//select[@id="yearbox"]')
        await year.selectByVisibleText('1997')
        var month=await $('//select[@placeholder="Month"]')
        await month.selectByVisibleText('September')
        var date=await $('//select[@placeholder="Day"]')
        await date.selectByVisibleText('19')
        var submitButton=await $('//button[@id="submitbtn"]')
        await submitButton.click()




    })
})