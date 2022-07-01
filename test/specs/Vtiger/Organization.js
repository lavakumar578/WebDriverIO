const HomePage = require("../../pageobjects/Vtiger_POM/HomePage")
const LoginPage = require("../../pageobjects/Vtiger_POM/LoginPage")
const CreateOragnization=require("../../pageobjects/Vtiger_POM/CreateOragnization")
const CreateOragnizationPage=require("../../pageobjects/Vtiger_POM/CreateOrganizationPage")
const CreateOragnizationInformationPage=require("../../pageobjects/Vtiger_POM/CreateOrganizationInformationPage")
const fs=require('fs')
const credentials=JSON.parse(fs.readFileSync("test/testdata/login.json"))
describe('Vtiger',async ()=>{
    credentials.forEach(({username,password,organization})=>{
    var randomNum=Math.round(Math.random()*1000)
    it('launching vtiger application-Smoke',async()=>{
        //maximize browser
        await browser.maximizeWindow()
        //open url
        await LoginPage.open()
        //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')
        await LoginPage.login(username,password,organization)
        //getting the title of the page ==>  Home page
        await expect(browser).toHaveTitleContaining('Home')
        //click on organization
        await HomePage.organization()
       // getting the title of the page ==>  Organizations
        await expect(browser).toHaveTitleContaining('Organizations')
        //click on create organization icon
        await CreateOragnization.clickCreateOragnization()
        // getting the title of the page ==>  Create Organization page
        await expect(browser).toHaveUrlContaining('EditView&return_action')
        //entering the value 
         await CreateOragnizationPage.enterName(organization+randomNum)
        //save the organization
        await CreateOragnizationPage.save()
        //check the created Organization name is same
        await CreateOragnizationInformationPage.organizationName()
        // getting the title of the page ==>  Create Organization information page
        await expect(browser).toHaveUrlContaining('DetailView&module')
        await HomePage.logout()
        //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')
    })
        
 })
})