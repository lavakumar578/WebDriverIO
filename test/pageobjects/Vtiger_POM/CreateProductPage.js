class CreateProductPage 
{
    get name(){
        return $('//input[@name="productname"]')
    }
    get category(){
        return $('//select[@name="productcategory"]')
    }
    get scroll(){
        return  $('//td[@class="detailedViewHeader"]/b[text()="Product Information"]')
    }
    get tofileUpload(){
        return $('//input[@id="my_file_element"]')
    }
    get saveButton(){
        return $('//td/textarea/../../following-sibling::tr/following-sibling::tr//input[@title="Save [Alt+S]"]')
    }
    async save(){
        await this.saveButton.click()
    }
    async scrollByElement(){
        await this.scrollByElement.scrollIntoView()
    }
    async selectCategory(text){
        await this.category.selectByVisibleText(text)
    }
    async enterProductName(text){
        await this.name.setValue(text)
    }
    async fileUpload(file){
        const uploadfilepath=await browser.uploadFile(file)
        await this.tofileUpload.setValue(uploadfilepath)
  
    }
}
module.exports=new CreateProductPage()