describe('vtiger',async()=>{
    it('lauching vtiger application',async()=>{
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
    //getting the title of the page ==>  Products
    await expect(browser).toHaveTitleContaining('Products')
    var productName=await $('//input[@name="productname"]')
    await productName.setValue('laptop')
    var category=await $('//select[@name="productcategory"]')
    await category.selectByVisibleText('Software')
    var scroll=await $('//td[@class="detailedViewHeader"]/b[text()="Product Information"]')
    await scroll.scrollIntoView()
    const filepath=await browser.uploadFile('C:/Users/LAVA KUMAR/Pictures/Screenshots/Screenshot (1).png')
    await $('//input[@id="my_file_element"]').setValue(filepath)
    var save=await $('//td/textarea/../../following-sibling::tr/following-sibling::tr//input[@title="Save [Alt+S]"]')
    await save.click()
    //getting the title of the page ==>  Products
    await expect(browser).toHaveTitleContaining('Products')
   
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
