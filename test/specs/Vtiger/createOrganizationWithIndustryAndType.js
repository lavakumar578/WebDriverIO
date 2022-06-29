const { organization } = require("../../pageobjects/Vtiger_POM/HomePage")
const HomePage = require("../../pageobjects/Vtiger_POM/HomePage")
const LoginPage = require("../../pageobjects/Vtiger_POM/LoginPage")
const CreateOragnizationPage=require("../../pageobjects/Vtiger_POM/CreateOrganizationPage")
const CreateOragnizationInformationPage=require("../../pageobjects/Vtiger_POM/CreateOrganizationInformationPage")
const fs=require('fs')
const credentials=JSON.parse(fs.readFileSync("test/testdata/login.json"))
describe('Vtiger',async ()=>{
    credentials.forEach(({username,password})=>{
    var randomNum=Math.round(Math.random()*1000)
    it('launching vtiger application',async()=>{

    await LoginPage.open()
    //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
    await expect(browser).toHaveTitleContaining('vtiger CRM 5')
    //maximize the browser  
    await browser.maximizeWindow()
    await LoginPage.login(username,password)
    //getting the title of the page ==>  Home page
    await expect(browser).toHaveTitleContaining('Home')
    await HomePage.organization()
    await expect(browser).toHaveTitleContaining('Organizations')
    //click on create organization icon
    await organization.clickOnCreateOrganization()
    await expect(browser).toHaveUrlContaining('EditView&return_action')
    //entering the value 
    await CreateOragnizationPage.enterName('SDET34'+randomNum)
    //industry type
    const industryType=await $('//select[@name="industry"]')
    await industryType.selectByVisibleText("Education")
    //select[@name="industry"]//option[contains(text(),"Education")]
       
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