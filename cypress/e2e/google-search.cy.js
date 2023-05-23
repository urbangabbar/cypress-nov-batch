/// <reference types="cypress" />

describe("Google search", ()=> {
    
    it("search for car", ()=>{
        cy.visit("www.google.com");
        cy.get("textarea").first().type("fastest runner", { delay: 1000 })
        cy.contains("Google Search").click()
    })
})