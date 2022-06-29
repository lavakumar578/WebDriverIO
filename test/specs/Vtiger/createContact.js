const ContactPage = require("../../pageobjects/Vtiger_POM/ContactPage")
const CreateContactPage = require("../../pageobjects/Vtiger_POM/CreateContactPage")
const HomePage = require("../../pageobjects/Vtiger_POM/HomePage")
const LoginPage = require("../../pageobjects/Vtiger_POM/LoginPage")
const fs=require('fs')
const credentials=JSON.parse(fs.readFileSync("test/testdata/login.json"))
    describe('Vtiger',async ()=>{
      credentials.forEach(({username,password})=>{
    it('launching vtiger application',async()=>{ 
      await browser.maximizeWindow()
      await LoginPage.open()
      await expect(browser).toHaveTitleContaining('vtiger CRM 5')
      await LoginPage.login(username,password)
      //getting the title of the page ==>  Home page
      await expect(browser).toHaveTitleContaining('Home')
      await HomePage.contacts()
      //getting the title of the page ==>  Contacts
      await expect(browser).toHaveTitleContaining('Contacts')
      await ContactPage.createContact()
      await expect(browser).toHaveUrlContaining('EditView&return_action')
      await CreateContactPage.enterLastName('SDET')
      await CreateContactPage.save()
      await expect(browser).toHaveUrlContaining('DetailView&module')
      await HomePage.logout()
      //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
      await expect(browser).toHaveTitleContaining('vtiger CRM 5')
    })
        
 })
})
