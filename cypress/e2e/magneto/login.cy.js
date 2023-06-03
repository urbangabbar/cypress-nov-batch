/// <reference types="cypress" />

// Should all properties https://docs.cypress.io/guides/references/assertions

// 1) No first name provided - > Error on name field + form submission should not happen
// 2) No last name provided - > Error on last field + form submission should not happen
// 3) No Email name provided - > Error on Email field + form submission should not happen
// 4) Invalid Email name provided - > Error on Email field + form submission should not happen
// 5) Weak password - > Error on password field + form submission should not happen
// 6) Passowrd and confirm password does not matc- > Error on confirm password field + form submission should not happen

describe("Signin", ()=> {
    beforeEach(()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
    })

    it("No first name provided", ()=> {
        cy.contains("Create an Account").click()
        cy.url().should('equal', 'https://magento.softwaretestingboard.com/customer/account/create/')
        cy.get('[title="Last Name"]').type("paliwal").should("have.value", "paliwal")
        cy.get('[title="Email"]').type("abhinavpaliwal271@gmail.com").should("have.value", "abhinavpaliwal271@gmail.com")
        cy.get('[title="Password"]').type("Wst673!$").should("have.value", "Wst673!$")
        cy.get('[title="Confirm Password"]').type("Wst673!$").should("have.value", "Wst673!$")
        cy.get('[title="Create an Account"]').click()
        cy.get("#firstname-error").should("have.text", "This is a required field.")
    })

    it("No last name provided", ()=> {
        cy.contains("Create an Account").click()
        cy.url().should('equal', 'https://magento.softwaretestingboard.com/customer/account/create/')
        cy.get('[title="First Name"]').type("abhinav").should("have.value", "abhinav")
        cy.get('[title="Email"]').type("abhinavpaliwal271@gmail.com").should("have.value", "abhinavpaliwal271@gmail.com")
        cy.get('[title="Password"]').type("Wst673!$").should("have.value", "Wst673!$")
        cy.get('[title="Confirm Password"]').type("Wst673!$").should("have.value", "Wst673!$")
        cy.get('[title="Create an Account"]').click()
        cy.get("#lastname-error").should("have.text", "This is a required field.")
    })
})