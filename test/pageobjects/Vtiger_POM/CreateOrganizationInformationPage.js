const { assert } = require("chai");

class CreateOragnizationInformationPage
{
    get text()
    {
        return $('//span[@id="dtlview_Organization Name"]')
    }
    async organizationName(){
        async () => {await this.text.waitForDisplayed({ timeout: 3000 });}
      var res= await this.text.getText()
        await assert.include(res,"SDET","text is not present")
        
    }
}
module.exports=new CreateOragnizationInformationPage()