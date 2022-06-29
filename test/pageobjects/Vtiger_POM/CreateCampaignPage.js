const BasePage = require("./BasePage");
const { productName } = require("./CreateproductInformationPage");

class CreateCampaignPage extends BasePage
{
    get enterCampaignNameTxt()
    {
        return $('//td/input[@name="campaignname"]')
    }
    get addIcon(){
        return  $('//img[@src="themes/softed/images/select.gif"]')
        
    }
    get saveButton()
    {
        return $('//td/input[@name="campaignname"]/../../following-sibling::tr/following-sibling::tr//input[@title="Save [Alt+S]"]')
    }
    get searchTxt(){
        return  $('//input[@name="search_text"]')
    }
    get searchBtn(){
        return $('//input[@class="crmbutton small create"]')
    }
    

    get enterProductTxt(){
        return $('//input[@name="search_text"]')
    }
    async addProductInOrganization(text){
        async () => {await this.searchTxt.waitForDisplayed({ timeout: 10000 })}
        await this.searchTxt.setValue(text)
        await this.searchBtn.click()
        await $('//a[text()="'+text+'"]').click()
    }
    async add()
    {
        await this.addIcon.click()
    }
    async enterCampaignName(name)
    {
        await this.enterCampaignNameTxt.setValue(name)
        

    }
    async save(){
        await this.saveButton.click()
    }
}
module.exports=new CreateCampaignPage();