/// <reference types="cypress" />

describe("assertions test", ()=> {

    it.skip("should assertion", ()=> {
        cy.visit("https://example.cypress.io/commands/querying");
        cy.get('ul.query-list>li.first').should('contain', 'apples')
    })
    it("should assertion table", ()=> {
        cy.visit("https://example.cypress.io/commands/assertions");
        cy.get('tbody tr:last').should('have.css', 'display','table-row')
        cy.get('tbody tr:last').should("to.match", "/*3*/")
    })
})