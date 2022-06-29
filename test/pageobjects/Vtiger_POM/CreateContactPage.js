const BasePage = require("./BasePage");

class CreateContactPage extends BasePage
{
    get enterLastNameTxt()
    {
        return $('//td/input[@name="lastname"]')
    }

    get saveButton()
    {
        return $('//input[@name="lastname"]/../../preceding-sibling::tr/td/div/input[@title="Save [Alt+S]"]')
    }
    get Organization(){
        return $('//td[@class="dvtCellLabel" and text()="Organization Name 			"]/following-sibling::td[@class="dvtCellInfo"]/img')
    }
    get searchTxt(){
        return  $('//input[@name="search_text"]')
    }
    get searchBtn(){
        return $('//input[@class="crmbutton small create"]')
    }
   
    async search(text){
        async () => {await this.searchTxt.waitForDisplayed({ timeout: 10000 })}
        await this.searchTxt.setValue(text)
        await this.searchBtn.click()
        await $('//a[text()="'+text+'"]').click()
    }
    async addOrganization(){
       
        await this.Organization.click()
    }
    async enterLastName(lastname)
    {
        await this.enterLastNameTxt.setValue(lastname)
    }
    async save(){
        await this.saveButton.click()
    }
}
module.exports=new CreateContactPage();