describe('Vtiger',async ()=>{
    it('checkBox',async()=>{
        await browser.url('http://localhost:8888/')
        await expect(browser).toHaveTitleContaining('vtiger')
        await browser.maximizeWindow()

        var userName=await $('//input[@name="user_name"]')
        await userName.setValue('admin')

        var password=await $('//input[@name="user_password"]')
        await password.setValue('root')

        var login=await $('//input[@id="submitButton"]')
        await login.click()

        await expect(browser).toHaveTitleContaining('Home')

        var contact=await $('//a[text()="Contacts"]')
        await contact.click()

        await expect(browser).toHaveTitleContaining('Contacts')

        var clickCheckBox=await $('//input[@name="selected_id" and @id="77"]')
        await clickCheckBox.click()
        await clickCheckBox.isSelected()

        var admin=await $('//img[@src="themes/softed/images/user.PNG"]')
        await admin.moveTo()

        var signout=await $('//a[text()="Sign Out"]')
        await signout.click

        await expect(browser).toHaveTitleContaining('vtiger')
        


    })
})