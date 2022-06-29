const LoginPage = require("../../pageobjects/Vtiger_POM/LoginPage")
const fs=require('fs')
const HomePage = require("../../pageobjects/Vtiger_POM/HomePage")
const ProductPage = require("../../pageobjects/Vtiger_POM/ProductPage")
const CreateProductPage = require("../../pageobjects/Vtiger_POM/CreateProductPage")
const credentials=JSON.parse(fs.readFileSync("test/testdata/login.json"))
describe('vtiger',async()=>{
  credentials.forEach(({username,password})=>{
    it('lauching vtiger application-Smoke',async()=>{
      await LoginPage.open()
      await browser.maximizeWindow()
      await LoginPage.login(username,password)
    //getting the title of the page ==>  Home page
    await expect(browser).toHaveTitleContaining('Home')
    await HomePage.product()
     //getting the title of the page ==>  Products
     await expect(browser).toHaveTitleContaining('Products')
    await ProductPage.clickProduct()
    await expect(browser).toHaveUrlContaining('EditView&return_action')
    await CreateProductPage.enterProductName('laptop')
    await CreateProductPage.selectCategory('Software')
    await CreateProductPage.scroll.scrollIntoView()
    await CreateProductPage.fileUpload('C:/Users/LAVA KUMAR/Pictures/Screenshots/Screenshot (1).png')
    await CreateProductPage.save()
    await expect(browser).toHaveUrlContaining('DetailView&module')
    await HomePage.logout()
    //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
    await expect(browser).toHaveTitleContaining('vtiger CRM 5')

    })
})
})
