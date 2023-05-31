/// <reference types="cypress" />


describe("Login page", ()=> {
    beforeEach(()=> {
        cy.visit("https://www.saucedemo.com/")
    });

    it("submit empty form", ()=> {
        cy.contains("Login").click()
        cy.get("#user-name").should('have.css', "border-bottom-color", "#e2231a")
    })
})