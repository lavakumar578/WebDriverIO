class CreateOragnizationPage{
    get name(){
        return $('//td[@class="dvtCellInfo"]//input[@name="accountname"]')
    }
    get saveButton(){
        return $('//td[@class="dvtCellInfo"]//input[@name="accountname"]/../../preceding-sibling::tr/td/div/input[@title="Save [Alt+S]"]')
    }
    async save(){
        await this.saveButton.click()
    }
    async enterName(text){
        await this.name.setValue(text)
    }
}
module.exports=new CreateOragnizationPage()