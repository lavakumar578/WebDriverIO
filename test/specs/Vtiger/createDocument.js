describe('Vtiger',async ()=>{
    it('launching vtiger application',async()=>{

        //launching the browser and passing the url
        await browser.url('http://localhost:8888/')
        //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')
        //maximize the browser  
        await browser.maximizeWindow()
 
        //username=admin
        const username= $('//div/input[@name="user_name"]')
        await username.setValue('admin')
      
        //password=root
        const password= $('//div/input[@name="user_password"]')
        await  password.setValue('root')
       
        //click on login button
        const loginbutton= $('//div/input[@id="submitButton"]')
        await loginbutton.click()

        //getting the title of the page ==>  Home page
        await expect(browser).toHaveTitleContaining('Home')
  
        //click Document
        const document=await $('//a[text()="Documents"]')
        await document.click()
        //getting the title of the page ==>  Documents
        await expect(browser).toHaveTitleContaining('Documents')

        //create Document
        const createDocument=await $('//img[@alt="Create Document..."]')
        await createDocument.click()
        await expect(browser).toHaveUrlContaining('EditView&return_action')

        //title 
        const title=await $('//td[@class="dvtCellLabel"]/following-sibling::td[@class="dvtCellInfo"]/input[@name="notes_title"]')
        await title.setValue('Document')
       

        //switchtoframe
        await browser.switchToFrame(0)
        async () => {
            const elem = await browser.switchToFrame(0)
            await elem.waitForDisplayed({ timeout: 5000 })}

       
        async () => {
            const elem = await $('//body[@class="cke_show_borders"]')
            await elem.waitForDisplayed({ timeout: 3000 });
        }

        //enter the msg
        const msg=await $('//body[@class="cke_show_borders"]')
        await msg.setValue('hello! everyone have a good day')
       

        await browser.keys(['Control','a'])
       
    
         //switch back to parent
         await browser.switchToParentFrame()

       
        //bold
        const bold=await $('//a[@id="cke_5"]')
        await bold.click()
        
        //italic
        const italic=await $('//a[@id="cke_6"]')
        await italic.click()

        //scroll
        const scroll=await $('//td[@class="detailedViewHeader"]/b[text()="File Information"]')
        await scroll.scrollIntoView()

        //fileupload
       
        const uploadfilepath=await browser.uploadFile('D:/New Text Document.txt')
        await $('//input[@name="filename"]').setValue(uploadfilepath)


        //savebutton
        const save=await $('//input[@name="filename"]/../../../following-sibling::tr//following-sibling::tr//td//input[@title="Save [Alt+S]"]')
        await save.click()
        await expect(browser).toHaveUrlContaining('DetailView&module')

        //go to admin
        const admin=$('//td[@style="padding-left:10px;padding-top:3px;"]/following-sibling::td[contains(@onmouseover,"fnDropDownUser(this,")]/img')
        await admin. moveTo()
 
        //signout
        const signout= $('//a[text()="Sign Out"]')
        await signout.click()

        //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
        await expect(browser).toHaveTitleContaining('vtiger CRM 5');
    })
})