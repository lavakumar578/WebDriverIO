const CampaignPage = require("../../pageobjects/Vtiger_POM/CampaignPage")
const CreateCampaignPage = require("../../pageobjects/Vtiger_POM/CreateCampaignPage")
const HomePage = require("../../pageobjects/Vtiger_POM/HomePage")
const LoginPage = require("../../pageobjects/Vtiger_POM/LoginPage")
const fs=require('fs')
const credentials=JSON.parse(fs.readFileSync("test/testdata/login.json"))
describe('Vtiger',async ()=>{
    credentials.forEach(({username,password,campaign})=>{
    it('createCampaign',async()=>{
        //maximize browser
        await browser.maximizeWindow()
        //open url
        await LoginPage.open()
        //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')
        await LoginPage.login(username,password,campaign)
        //getting the title of the page ==>  Home page
        await expect(browser).toHaveTitleContaining('Home')
        await HomePage.campaign()
        //getting the title of the page ==>  Campaigns
        await expect(browser).toHaveTitleContaining('Campaigns')
        await CampaignPage.createCampaign()
        await expect(browser).toHaveUrlContaining('EditView&return_action')
        await CreateCampaignPage.enterCampaignName(campaign)
        await CreateCampaignPage.save()
        await expect(browser).toHaveUrlContaining('DetailView&module')
        await HomePage.logout()
         //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')

    })     
})
})