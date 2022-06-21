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
     

        //click on organization
        const organization= $('//td/a[text()="Organizations"]')
        await organization.click()
        await expect(browser).toHaveTitleContaining('Organizations')
        //click on create organization icon
        const clickOnCreateOrganization= $('//td/a/img[@alt="Create Organization..."]')
        await  clickOnCreateOrganization.click()
        await expect(browser).toHaveUrlContaining('EditView&return_action')
        //entering the value 
        const entervalue= $('//td[@class="dvtCellInfo"]//input[@name="accountname"]')
        var randomNum=Math.round(Math.random()*1000)
        await entervalue.setValue('SDET'+randomNum)

        //industry type
        const industryType=await $('//select[@name="industry"]')
        await industryType.selectByVisibleText("Education")
        //select[@name="industry"]//option[contains(text(),"Education")]
       
        //type
        const type=await $('//select[@name="accounttype"]')
        await type.selectByVisibleText("Press")

        //save the organization
        const savebutton=await $('//td[@class="dvtCellInfo"]//input[@name="accountname"]/../../preceding-sibling::tr/td/div/input[@title="Save [Alt+S]"]')
        await savebutton.click()

        async () => {
            const elem = await $('//span[contains(text(),"Organization Information")]')
            await elem.waitForDisplay({ timeout: 5000 });
        }

        await expect(browser).toHaveUrlContaining('DetailView')
        
        var getOrganizationName=await $('//span[@id="dtlview_Organization Name"]').getText()

       
        

        //go to admin
        const admin=$('//td[@style="padding-left:10px;padding-top:3px;"]/following-sibling::td[contains(@onmouseover,"fnDropDownUser(this,")]/img')
        await admin. moveTo()

        //signout
        const signout= $('//a[text()="Sign Out"]')
        await signout.click()

         //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')

    })
        
 })