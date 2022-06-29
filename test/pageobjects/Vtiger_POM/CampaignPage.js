const BasePage = require("./BasePage");

class CampaignPage extends BasePage
{
    get createCampaignTxt()
    {
        return  $('//td/a/img[@alt="Create Campaign..."]')
    }

    async createCampaign(){
         await this.createCampaignTxt.click()
    }
}
module.exports=new CampaignPage()
