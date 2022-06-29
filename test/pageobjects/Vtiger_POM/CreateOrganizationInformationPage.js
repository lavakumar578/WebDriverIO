class CreateOragnizationInformationPage
{
    get text()
    {
        return $('//span[@id="dtlview_Organization Name"]')
    }
    async organizationName(){
        async () => {await this.text.waitForDisplayed({ timeout: 3000 });}
        await this.text.getText()
    }
}
module.exports=new CreateOragnizationInformationPage()