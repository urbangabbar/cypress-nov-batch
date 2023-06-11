/// <reference types="cypress" />

describe("Google search", ()=> {
    
    it("search for car", ()=>{
        cy.visit("www.facebook.com");
        cy.viewport(320, 480)
        cy.title().should("equal", "Facebook - लॉग इन या साइन अप करें")
        cy.window().should('have.property', 'alert')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })
})