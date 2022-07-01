const { assert } = require("chai");
class CreateProductInformationPage
{
    get textProductName(){
        return $('//span[@id="dtlview_Product Name"]')
    }
    async productName(){
        async () => {await this.textProductName.waitForDisplayed({ timeout: 3000 });}
       var res= await this.textProductName.getText()
       await assert.include(res,"laptop","text is not present")
    }
}
module.exports=new CreateProductInformationPage()