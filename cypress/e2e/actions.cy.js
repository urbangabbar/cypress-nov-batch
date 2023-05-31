/// <reference types="cypress" />

describe("actions", () => {

    beforeEach(()=> {
        cy.visit("https://example.cypress.io/commands/actions");
    })

    it.skip("practice type", () => {
        cy.get('.action-email')
            .type('abhinavfake@email.com', { delay: 100 })
            .should('have.value', 'abhinavfake@email.com')
    })
    it("focus", ()=> {
        cy.get('.action-focus').focus()
        cy.contains("Password").should("have.css", 'color', "rgb(255, 165, 0)")
    });
    it.skip("Scrollintoview", ()=> {
        cy.get("#scroll-both").scrollIntoView({})
        cy.wait(5000)
        cy.get("#scroll-both button").scrollIntoView()
    })
    it.skip("scroll to", ()=> {
        cy.get("#scrollable-vertical").scrollIntoView()
        cy.get('#scrollable-vertical').scrollTo(500, 250, {duration: 2000 })
    })
})