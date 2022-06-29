const HomePage = require("../../pageobjects/Vtiger_POM/HomePage")
const LoginPage = require("../../pageobjects/Vtiger_POM/LoginPage")
const CreateOragnization = require("../../pageobjects/Vtiger_POM/CreateOragnization")
const CreateOragnizationPage=require("../../pageobjects/Vtiger_POM/CreateOrganizationPage")
const CreateOragnizationInformationPage=require("../../pageobjects/Vtiger_POM/CreateOrganizationInformationPage")
const ContactPage=require("../../pageobjects/Vtiger_POM/ContactPage")
const CreateContactPage = require("../../pageobjects/Vtiger_POM/CreateContactPage")
const fs=require('fs')
const credentials=JSON.parse(fs.readFileSync("test/testdata/login.json"))
describe('Vtiger',async()=>{
  credentials.forEach(({username,password})=>{
    var randomNum=Math.round(Math.random()*1000)
    it('open vtiger application',async()=>{

    await browser.maximizeWindow()
    //launching the browser and passing the url
    await LoginPage.open()
    //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
    await expect(browser).toHaveTitleContaining('vtiger CRM 5')
    await LoginPage.login(username,password)
    //getting the title of the page ==>  Home page
    await expect(browser).toHaveTitleContaining('Home')
    //click on organization
    await HomePage.organization()
    //getting the title of the page ==>  Organizations
    await expect(browser).toHaveTitleContaining('Organizations')
    //click on create organization icon
    await CreateOragnization.clickCreateOragnization()
    await expect(browser).toHaveUrlContaining('EditView&return_action')
    //entering the value 
    var orgName='SDET'+randomNum
    await CreateOragnizationPage.enterName(orgName)
    //save the organization
    await CreateOragnizationPage.save()
    await expect(browser).toHaveUrlContaining('DetailView')
    await CreateOragnizationInformationPage.organizationName()
    await expect(browser).toHaveTitleContaining('Organizations')
    //click on contact
    await HomePage.contacts()
    //getting the title of the page ==>  Contacts
    await expect(browser).toHaveTitleContaining('Contacts') 
    //click on create contact icon
    await ContactPage.createContact()
    await expect(browser).toHaveUrlContaining('EditView&return_action')
    //entering the value 
    await CreateContactPage.enterLastName('TYSS')
    //add organization 
    await CreateContactPage.addOrganization()
    //get session id
    var window=await browser.getWindowHandles()
    await browser.switchToWindow(window[1])
    //enterOrganization name
    await CreateContactPage.search(orgName)
    await browser.switchToWindow(window[0])
    //save the contact
    await CreateContactPage.save()
    await expect(browser).toHaveUrlContaining('DetailView&module')
    await HomePage.logout()
    //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
    await expect(browser).toHaveTitleContaining('vtiger CRM 5')
    })
        
 })
 
})