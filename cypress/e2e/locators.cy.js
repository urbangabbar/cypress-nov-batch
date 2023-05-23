/// <reference types="cypress" />

//describe: helps you define your test suite
describe('Locators', ()=> {
   
    it.skip('trying out get',()=>{
        cy.visit("https://example.cypress.io/");
        cy.contains("Querying").click({force: true})
    })
    it("try within", ()=> {
        cy.visit("https://example.cypress.io/");
        cy.contains("Querying").click({force: true})
        cy.get('input:first').should('have.attr', 'placeholder', 'Name')
        cy.get('.query-form').within(() => {
            cy.get('input:first').should('have.attr', 'placeholder', 'Email')
            cy.get('input:last').should('have.attr', 'placeholder', 'Password')
          })
    })
})