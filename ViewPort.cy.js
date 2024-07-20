describe('Cypress Automation',()=>{

    it('TC1-Cypress automation test1',()=>{
    cy.viewport(990, 760)
    cy.visit('https://www.amazon.com')
    
    
    })

    it('TC2-Iphone3',()=>{
        cy.viewport('iphone-3')
        cy.visit('https://www.amazon.com')
        
        
        })

        it('TC3-Iphone3',()=>{
            cy.viewport('iphone-3','landscape')
            cy.visit('https://www.amazon.com')
            
            
            })

            it('TC1-4-Iphone3',()=>{
                cy.viewport('samsung-s10')
                cy.visit('https://www.amazon.com')
                
                
                })
    
    })
    