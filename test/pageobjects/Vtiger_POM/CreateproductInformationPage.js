class CreateProductInformationPage
{
    get textProductName(){
        return $('//span[@id="dtlview_Product Name"]')
    }
    async productName(){
        async () => {await this.textProductName.waitForDisplayed({ timeout: 3000 });}
        await this.textProductName.getText()
    }
}
module.exports=new CreateProductInformationPage()