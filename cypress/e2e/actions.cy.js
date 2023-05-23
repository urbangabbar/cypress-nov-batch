/// <reference types="cypress" />

describe("actions", () => {

    beforeEach(()=> {
        cy.visit("https://example.cypress.io/commands/actions");
    })

    it("practice type", () => {
        cy.get('.action-email')
            .type('abhinavfake@email.com', { delay: 100 })
        cy.get('.action-disabled')
            // Ignore error checking prior to type
            // like whether the input is visible or disabled
            .type('disabled error checking', { force: true })
            .should('have.value', 'disabled error checking')
    })
    it("focus", ()=> {
        cy.get('.action-focus').focus()
    })
})