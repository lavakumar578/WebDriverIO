const { organization } = require("../../pageobjects/Vtiger_POM/HomePage")
const HomePage = require("../../pageobjects/Vtiger_POM/HomePage")
const LoginPage = require("../../pageobjects/Vtiger_POM/LoginPage")
const CreateOragnizationPage=require("../../pageobjects/Vtiger_POM/CreateOrganizationPage")
const CreateOragnizationInformationPage=require("../../pageobjects/Vtiger_POM/CreateOrganizationInformationPage")
const fs=require('fs')
const CreateOragnization = require("../../pageobjects/Vtiger_POM/CreateOragnization")
const credentials=JSON.parse(fs.readFileSync("test/testdata/login.json"))
describe('Vtiger',async ()=>{
    credentials.forEach(({username,password,organization})=>{
    var randomNum=Math.round(Math.random()*1000)
    it('launching vtiger application',async()=>{

    //maximize browser
    await browser.maximizeWindow()
    //open url
    await LoginPage.open()
    //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
    await expect(browser).toHaveTitleContaining('vtiger CRM 5')
    await LoginPage.login(username,password,organization)
    //getting the title of the page ==>  Home page
    await expect(browser).toHaveTitleContaining('Home')
    await HomePage.organization()
    await expect(browser).toHaveTitleContaining('Organizations')
    await CreateOragnization.clickCreateOragnization()
    //click on create organization icon
    await expect(browser).toHaveUrlContaining('EditView&return_action')
    //entering the value 
    await CreateOragnizationPage.enterName(organization+randomNum)
    //industry type
    const industryType=await $('//select[@name="industry"]')
    await industryType.selectByVisibleText("Education")
   
    //type
        const type=await $('//select[@name="accounttype"]')
        await type.selectByVisibleText("Press")
        //save the organization
        await CreateOragnizationPage.save()
        await CreateOragnizationInformationPage.organizationName()
        await expect(browser).toHaveUrlContaining('DetailView&module')
        await HomePage.logout()

         //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')

    })
        
 })
})