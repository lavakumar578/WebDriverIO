const BasePage = require("./BasePage");

class HomePage extends BasePage
{
 get contactsTxt(){
    return $('//td/a[text()="Contacts"]')
 }  
 get campaignTxt(){
   return  $('//td/a[text()="Campaigns"]')
 }
 get documentTxt(){
   return $('//a[text()="Documents"]')
 }
 get organizationTxt(){
   return $('//td/a[text()="Organizations"]')
 }
 get moreTxt(){
   return $('//td/a[text()="More"]')
 }
 get productTxt()
 {
   return $('//a[text()="Products"]')
 }
 get admin(){
   return $('//td[@style="padding-left:10px;padding-top:3px;"]/following-sibling::td[contains(@onmouseover,"fnDropDownUser(this,")]/img')
}

get signout(){
   return $('//a[text()="Sign Out"]')
}
async organization(){
   await this.organizationTxt.click()
}
async document(){
   await this.documentTxt.click()
}
async campaign(){
   await this.moreTxt.click()
   await this.campaignTxt.click()
}
 async contacts(){
   await this.contactsTxt.click()
}
async product()
{
   await (await this.productTxt).click()
}
 async logout(){
   await this.admin.moveTo()
   await this.signout.click()
}


}
module.exports=new HomePage();