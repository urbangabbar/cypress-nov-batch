/// <reference types="cypress" />


describe('Locators example', ()=> {

    it('try cy.get',()=>{
        cy.visit("https://example.cypress.io/")
        cy.contains("Traversal").click({force: true});
        cy.get('li')
    })
})

