describe('frameshandling',async()=>{
        it('frame',async()=>{
            await browser.url('https://ui.vision/demo/webtest/frames/')
            await browser.maximizeWindow()
            await expect(browser).toHaveTitleContaining('Frames')
            var frame1=await $('//frame[@src="frame_1.html"]')
            await browser.switchToFrame(frame1)
            var frame1text=await $('//input[@name="mytext1"]')
            await frame1text.setValue('hello frame1')
            await browser.switchToParentFrame()
            var frame2=await $('//frame[@src="frame_2.html"]')
            await browser.switchToFrame(frame2)
            var frame2text=await $('//input[@name="mytext2"]')
            await frame2text.setValue('hello frame2')

            await browser.switchToParentFrame()
            var frame3=await $('//frame[@src="frame_3.html"]')
            await browser.switchToFrame(frame3)
            var frame3text=await $('//input[@name="mytext3"]')
            await frame3text.setValue('hello frame3')
            await browser.switchToFrame(0)

            var clickOnHuman=await $('//span[text()="I am a human"]/../../../div/div/div/div')
            await clickOnHuman.click()
           

            var scroll=await $('//span[text()="How do you plan to use the software?"]')
            var clickTesting=await $('//span[text()="Web Testing"]/../../..')
            await scroll.scrollIntoView()
            await clickTesting.click()
     
            var scrollTill=await $('//span[text()="Did you know that the IDE has a LOOP button?"]')
            await scrollTill.scrollIntoView()
            
        
            var choose=await $('//span[text()="Choose"]')
            await choose.click()
            var selectYes=await $('//div[@class="OA0qNb ncFHed QXL7Te"]/div[@class="MocG8c HZ3kWc mhLiyf LMgvRb"]')
            await selectYes.click()
            var next=await $('//span[text()="Next"]')
            await next.click()
           
            var shortText=await $('//div[@class="Xb9hP"]/input[@class="whsOnd zHQkBf"]')
            await shortText.setValue('hello')
          

            var scrollTilllast=await $('//div[text()="Never submit passwords through Google Forms."]')
            await scrollTilllast.scrollIntoView()

            var longAnswer=await $('//div[@class="Pc9Gce Wic03c"]/textarea')
            await longAnswer.setValue("Send a sequence of key strokes to an element ")
            
            

            var submit=await $('//span[text()="Submit"]')
            await submit.click()
            
            var msg=await $('//div[@class="vHW8K"]')
            var result=await msg.getValue()


            await browser.switchToFrame(null)
            var frame4=await $('//frame[@src="frame_4.html"]')
            await browser.switchToFrame(frame4)
            var frame4text=await $('//input[@name="mytext4"]')
            await frame4text.setValue('hello frame4')
            
            await browser.switchToParentFrame()
            var frame5=await $('//frame[@src="frame_5.html"]')
            await browser.switchToFrame(frame5)
            var frame5text=await $('//input[@name="mytext5"]')
            await frame5text.setValue('hello frame5')

            console.log(result);

        })
})