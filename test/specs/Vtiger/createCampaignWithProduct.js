describe('Vtiger',async()=>{
  
    it('open vtiger application',async()=>{
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
  
    const product=await $('//a[text()="Products"]')
    await product.click()
     //getting the title of the page ==>  Products
     await expect(browser).toHaveTitleContaining('Products')
    const clickCreateProduct=await $('//img[@alt="Create Product..."]')
    await clickCreateProduct.click()
    await expect(browser).toHaveUrlContaining('EditView&return_action')
    var randomNum=Math.round(Math.random()*1000)
    var productName=await $('//input[@name="productname"]')
    await productName.setValue('laptop'+randomNum)
    var category=await $('//select[@name="productcategory"]')
    await category.selectByVisibleText('Software')
    var scroll=await $('//td[@class="detailedViewHeader"]/b[text()="Product Information"]')
    await scroll.scrollIntoView()
    var save=await $('//td/textarea/../../following-sibling::tr/following-sibling::tr//input[@title="Save [Alt+S]"]')
    await save.click()
    await expect(browser).toHaveUrlContaining('DetailView&module')
    var getproductName=await $('//span[@id="dtlview_Product Name"]').getText()
  
     //click on more
     const clickMore= $('//td/a[text()="More"]')
     await clickMore.moveTo()

     //click on campaign
     var campaign= $('//td/a[text()="Campaigns"]')
     await campaign.click()

       //getting the title of the page ==>  Campaigns
     await expect(browser).toHaveTitleContaining('Campaigns')

     //click on create campaign icon
     const clickOnCreateCampaign= $('//td/a/img[@alt="Create Campaign..."]')
     await  clickOnCreateCampaign.click()

     
     await expect(browser).toHaveUrlContaining('EditView&return_action')

    var enterCampaign=await $('//input[@name="campaignname"]')
    await enterCampaign.setValue('SDET'+randomNum)
       
    var add=await $('//img[@alt="Select"]')
    await add.click()

    var window=await browser.getWindowHandles()
    await browser.switchToWindow(window[1])
    var enterProductName=await $('//input[@name="search_text"]')
    await enterProductName.setValue(getproductName)
    var search=await $('//input[@name="search"]')
    await search.click()
    var clickProduct=await $("//a[text()='"+getproductName+"']")
    await clickProduct.click()
    await browser.switchToWindow(window[0])
    var save=await $('//td/input[@name="campaignname"]/../../following-sibling::tr/following-sibling::tr//input[@title="Save [Alt+S]"]')
    await save.click()
    
    
    await expect(browser).toHaveUrlContaining('DetailView&module')
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