class ProductPage {
    get productIcon(){
        return  $('//img[@alt="Create Product..."]')
    }
    async clickProduct(){
        await this.productIcon.click()
    }
}
module.exports=new ProductPage()