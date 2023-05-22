/// <reference types="cypress" />

describe("Google search", ()=> {
    
    it("search for car", ()=>{
        cy.visit("www.google.com");
        cy.get("textarea").first().type("car")
        cy.contains("Google Search").click()
    })
})