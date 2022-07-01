const fs=require('fs')
const LoginPage = require('../pageobjects/Vtiger_POM/LoginPage')
const credentials=JSON.parse(fs.readFileSync("test/testdata/login.json"))
describe('Vtiger',function (){
    credentials.forEach(({username,password,campaign})=>{
    this.retries(3)
    it('createCampaign1',async()=>{
        //maximize browser
        await browser.maximizeWindow()
        //open url
        await LoginPage.open()
        //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')
        await LoginPage.login(username,password)
        //getting the title of the page ==>  Home page
        await expect(browser).toHaveTitleContaining('123')
    })
})

    it('createCampaign2',async()=>{
        //maximize browser
        await browser.maximizeWindow()
        //open url
        await LoginPage.open()
        //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')
        await LoginPage.login('admin','root')
        //getting the title of the page ==>  Home page
        await expect(browser).toHaveTitleContaining('Home')
    })


})