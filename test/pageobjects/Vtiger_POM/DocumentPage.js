const BasePage = require("./BasePage");

class DocumentPage extends BasePage
{
    get createDocumentTxt(){
        return $('//img[@alt="Create Document..."]')
    }
    async clickCreateDocument(){
        await this.createDocumentTxt.click()
    }
}
module.exports=new DocumentPage()