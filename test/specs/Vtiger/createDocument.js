const CreateDocumentPage = require("../../pageobjects/Vtiger_POM/CreateDocumentPage")
const DocumentPage = require("../../pageobjects/Vtiger_POM/DocumentPage")
const HomePage = require("../../pageobjects/Vtiger_POM/HomePage")
const LoginPage = require("../../pageobjects/Vtiger_POM/LoginPage")
const fs=require('fs')
const credentials=JSON.parse(fs.readFileSync("test/testdata/login.json"))
describe('Vtiger',async ()=>{
    credentials.forEach(({username,password})=>{
    it('launching vtiger application',async()=>{
        await LoginPage.open()
        //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')
        //maximize the browser  
        await browser.maximizeWindow()
        await LoginPage.login(username,password)
        //getting the title of the page ==>  Home page
        await expect(browser).toHaveTitleContaining('Home')
        await HomePage.document()
        //getting the title of the page ==>  Documents
        await expect(browser).toHaveTitleContaining('Documents')
        await DocumentPage.clickCreateDocument()
        await expect(browser).toHaveUrlContaining('EditView&return_action')
        await CreateDocumentPage.enterTitle('document')
        //switchtoframe
        await browser.switchToFrame(0)
        async () => {
        const elem = await browser.switchToFrame(0)
        await elem.waitForDisplayed({ timeout: 5000 })}
        //enter the msg
        await CreateDocumentPage.enterText('hello everyone!                have a good day')
         //switch back to parent
        await browser.switchToParentFrame()
        await CreateDocumentPage.boldAndItalic()
        await CreateDocumentPage.scrollIntoElement()
        await CreateDocumentPage.fileUpload('D:/New Text Document.txt')
        await CreateDocumentPage.saveButton()
        await expect(browser).toHaveUrlContaining('DetailView&module')
        await HomePage.logout()
        //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
        await expect(browser).toHaveTitleContaining('vtiger CRM 5');
    })
})
})