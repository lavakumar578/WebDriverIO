const BasePage = require("./BasePage");

class CreateOragnization extends BasePage{
    get createOragnizationIcon(){
        return $('//td/a/img[@alt="Create Organization..."]')
    }
    async clickCreateOragnization(){
        await this.createOragnizationIcon.click()
    }
}
module.exports=new CreateOragnization()