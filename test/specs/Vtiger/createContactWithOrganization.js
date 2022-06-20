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
    const organization= await $('//td/a[text()="Organizations"]')
    await organization.click()

    //getting the title of the page ==>  Organizations
    await expect(browser).toHaveTitleContaining('Organizations')

    //click on create organization icon
    const clickOnCreateOrganization=await $('//td/a/img[@alt="Create Organization..."]')
    await  clickOnCreateOrganization.click()

    //getting the title of the page ==>  Organizations
    await expect(browser).toHaveTitleContaining('Organizations')

    //entering the value 
    var entervalue=await $('//td[@class="dvtCellInfo"]//input[@name="accountname"]')
    var randomNum=Math.round(Math.random()*1000)
    await entervalue.setValue('SDET'+randomNum)

    //save the organization
    var savebutton=await $('//td[@class="dvtCellInfo"]//input[@name="accountname"]/../../preceding-sibling::tr/td/div/input[@title="Save [Alt+S]"]')
    await savebutton.click()
    
    async () => {
      const elem = await $('//span[contains(text(),"Organization Information")]')
      await elem.waitForDisplayed({ timeout: 3000 });
  }

    //getting the title of the page ==>  Organizations
    await expect(browser).toHaveTitleContaining('Organizations')

    getorganizationName=await $('//span[@id="dtlview_Organization Name"]').getText()
    
    //getting the title of the page ==>  Organizations
    await expect(browser).toHaveTitleContaining('Organizations')
     

    //click on contact
    const contact= await $('//td/a[text()="Contacts"]')
    await contact.click()

    //getting the title of the page ==>  Contacts
    await expect(browser).toHaveTitleContaining('Contacts') 

    //click on create contact icon
    const clickOnCreateContact=await $('//td/a/img[@alt="Create Contact..."]')
    await  clickOnCreateContact.click()

    //getting the title of the page ==>  Contacts
    await expect(browser).toHaveTitleContaining('Contacts')

    //entering the value 
    var entervalue= await $('//td/input[@name="lastname"]')
    await entervalue.setValue('TYSS')
    
   
    //add organization 
    const addOrganization=await $('//td[@class="dvtCellLabel" and text()="Organization Name 			"]/following-sibling::td[@class="dvtCellInfo"]/img')
    await addOrganization.click()

    //get session id
    var SessionId=await browser.getWindowHandles();
    await browser.switchToWindow(SessionId[1])

    //enterOrganization name
    const enterOrganizationName=await $('//input[@name="search_text"]')
    await enterOrganizationName.setValue(getorganizationName)
 
    // search organization name
    const searchButton=await $('//input[@class="crmbutton small create"]')
    await searchButton.click()
    const selectOrganization=await $("//a[text()='"+getorganizationName+"']")
    await selectOrganization.click()

    await browser.switchToWindow(SessionId[0])


    //save the contact
    var savebutton= await $('//input[@name="lastname"]/../../preceding-sibling::tr/td/div/input[@title="Save [Alt+S]"]')
    await savebutton.click()
    //getting the title of the page ==>  Contacts
    await expect(browser).toHaveTitleContaining('Contacts')

    //go to admin
    const admin=await $('//td[@style="padding-left:10px;padding-top:3px;"]/following-sibling::td[contains(@onmouseover,"fnDropDownUser(this,")]/img')
    await admin. moveTo()

    //signout
    const signout= await $('//a[text()="Sign Out"]')
    await signout.click()

    //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
    await expect(browser).toHaveTitleContaining('vtiger CRM 5')
    })
        
 })
 