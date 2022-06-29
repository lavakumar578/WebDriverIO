const BasePage = require("./BasePage");

class ContactPage extends BasePage
{
    get createContactTxt()
    {
        return $('//td/a/img[@alt="Create Contact..."]')
    }

    async createContact(){
         await this.createContactTxt.click()
    }
}
module.exports=new ContactPage();
