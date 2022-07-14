const { assert } = require("chai");
const fs=require('fs')
const HomePage = require('../../pageobjects/Vtiger_POM/HomePage')
const LoginPage = require('../../pageobjects/Vtiger_POM/LoginPage')
const ProductPage=require("../../pageobjects/Vtiger_POM/ProductPage")
const CreateProductPage=require("../../pageobjects/Vtiger_POM/CreateProductPage")
const CreateproductInformationPage=require("../../pageobjects/Vtiger_POM/CreateproductInformationPage")
const CreateCampaignPage=require("../../pageobjects/Vtiger_POM/CreateCampaignPage")
const CampaignPage=require("../../pageobjects/Vtiger_POM/CampaignPage")
const credentials=JSON.parse(fs.readFileSync("test/testdata/login.json"))
describe('Vtiger',async()=>{
    var randomNum=Math.round(Math.random()*1000)
    credentials.forEach(({username,password,product,campaign})=>{
    it('open vtiger application',async()=>{
    //maximize browser
    await browser.maximizeWindow()
    //open url
    // await LoginPage.open()
    // //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
    // await expect(browser).toHaveTitleContaining('vtiger CRM 5')
    // await LoginPage.login(username,password)
    //getting the title of the page ==>  Home page
    await expect(browser).toHaveTitleContaining('Home')
    await HomePage.product()
     //getting the title of the page ==>  Products
     await expect(browser).toHaveTitleContaining('Products')
    await ProductPage.clickProduct()
    await expect(browser).toHaveUrlContaining('EditView&return_action')
    var productName=product+randomNum
    await CreateProductPage.enterProductName(productName)
    await CreateProductPage.selectCategory('Software')
    await CreateProductPage.scroll.scrollIntoView()
    await CreateProductPage.save()
    await expect(browser).toHaveUrlContaining('DetailView&module')
    await CreateproductInformationPage.productName()
    await HomePage.campaign()
    //getting the title of the page ==>  Campaigns
     await expect(browser).toHaveTitleContaining('Campaigns')
    await CampaignPage.createCampaign()
    await expect(browser).toHaveUrlContaining('EditView&return_action')
    await CreateCampaignPage.enterCampaignName(campaign+randomNum)
    await CreateCampaignPage.add()
    var window=await browser.getWindowHandles()
    await browser.switchToWindow(window[1])
    await CreateCampaignPage.addProductInOrganization(productName)
    await browser.switchToWindow(window[0])
    await CreateCampaignPage.save()
    // await HomePage.logout()
      //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
     await expect(browser).toHaveTitleContaining('vtiger CRM 5')
    })
})
})