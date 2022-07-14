const fs=require('fs')
const LoginPage = require('../pageobjects/Vtiger_POM/LoginPage')
const credentials=JSON.parse(fs.readFileSync("test/testdata/login.json"))
describe('Vtiger',function (){
    credentials.forEach(({username,password})=>{
    it('createCampaign1',async()=>{
        //maximize browser
        await browser.maximizeWindow()
        //open url
        await LoginPage.open()
        //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')
        await LoginPage.login(username,password)
})
})
})
