describe('Vtiger',async ()=>{
    credentials.forEach(({username,password})=>{
    it('launching vtiger application',async()=>{

    //launching the browser and passing the url
       await browser.url('http://localhost:8888/')
    //getting the title of the page ==>  vtiger CRM 5 - Commercial Open Source CRM
      await expect(browser).toHaveTitleContaining('vtiger CRM 5')
    //maximize the browser  
        await browser.maximizeWindow()
  
        //username=admin
        const username=await $('//div/input[@name="user_name"]')
        username.setValue('admin')
       
        //password=root
        const password=$('//div/input[@name="user_password"]')
        password.setValue('hi')
      
        //click on login button
        const loginbutton=$('//div/input[@id="submitButton"]')
        loginbutton.click()
      
        const errormsg=await $('//div[@class="errorMessage"]')

        await browser.waitUntil(async ()=>((await $('.errorMessage')).getAttribute('class')==='You must specify a valid username and password.',
        {
            timeout: 10000,
            timeoutMsg: 'expected text to be different after 5s'
        }))
        
       await expect(errormsg).toHaveTextContaining('You must specify') 
    })
})
})