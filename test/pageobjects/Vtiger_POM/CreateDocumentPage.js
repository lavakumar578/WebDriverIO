const BasePage = require("./BasePage");

class CreateDocumentPage extends BasePage{
    get titleField(){
        return $('//td[@class="dvtCellLabel"]/following-sibling::td[@class="dvtCellInfo"]/input[@name="notes_title"]')
    }
    get textField(){
        return $('//body[@class="cke_show_borders"]')
    }
    get bold(){
        return $('//a[@id="cke_5"]')
    }
    get italic(){
        return $('//a[@id="cke_6"]')
    }
    get scroll(){
        return $('//td[@class="detailedViewHeader"]/b[text()="File Information"]')
    }
    
    get tofileUpload(){
        return $('//input[@name="filename"]')
    }
    get save(){
        return $('//input[@name="filename"]/../../../following-sibling::tr//following-sibling::tr//td//input[@title="Save [Alt+S]"]')
    }
    async saveButton(){
        await this.save.click()
    }
    async fileUpload(file){
    const uploadfilepath=await browser.uploadFile(file)
    await this.tofileUpload.setValue(uploadfilepath)
    }
    async scrollIntoElement(){
        await this.scroll.scrollIntoView()
    }
    async boldAndItalic(){
        await this.bold.click()
        await this.italic.click()
    }
    async enterText(text)
    {
       async () => { await this.textField.waitForDisplayed({ timeout: 3000 }); }
        await this.textField.setValue(text)
        await browser.keys(['Control','a'])
    }
    async enterTitle(text){
        
        await this.titleField.setValue(text)
    }
}
module.exports=new CreateDocumentPage()