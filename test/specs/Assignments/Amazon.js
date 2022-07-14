describe("Links",async ()=>{
    it("links",async ()=>{
        await browser.url("https://www.amazon.in")
        var links=await browser.$$("//a")
        var linkText=[]
        for (let index = 0; index < links.length; index++) {
            const element = await links[index].getText();
            linkText[index]=element
        }
        for (let i = 0; i < linkText.length; i++) {
            for (let j = i+1; j < linkText.length; j++) {
                if(linkText[i]==linkText[j])
                {
                    linkText.splice(j,1)
                }
            }
            
        }
        console.log(links.length);
        console.log(linkText.length);

    })
})