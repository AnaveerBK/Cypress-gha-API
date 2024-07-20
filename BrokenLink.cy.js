describe('Broken Links on the page Test',()=>{

    it('TC001-verify navigate across the pages',()=>{
        cy.visit('https://naveenautomationlabs.com/opencart/')
        let brokenLinks=0
        let activeLinks=0
        
    
        
        cy.get('a').each(($link, index)=> {

            const href =$link.attr('href')
            if(href) {

                cy.request({url:href, failOnStatusCode:false}).then((response)=>{

                    if(response.status>=400){

                        cy.log('***Broken link is ${index+1}*** ${href}')
                        brokenLinks++
                    } else{

                        cy.log('****${index+1} is Active link*****')
                        activeLinks++
                    }
                })


            }


        }).then(($links)=>{

            const tatalLinks=$links.length
            cy.log('*****total links*****${tatalLinks}')
            cy.log('*****broken links*****${brokenLinks}')
            cy.log('*****Active links*****${activeLinks}')
        })
        
    
    })
})