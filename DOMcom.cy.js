describe('DOM commands Test',()=>{

    it('TC001-DOM commnds in cypress',()=>{
    
        cy.visit('https://naveenautomationlabs.com/opencart/')
        //cy.get('.image').first().click()
        //cy.get('.image').last().click()
        cy.get('.image').eq(1).click()
        //cy.contains('MackBook').click()
    
    })
})