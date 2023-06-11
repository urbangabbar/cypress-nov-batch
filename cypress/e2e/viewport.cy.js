/// <reference types="cypress" />

describe('Extra', ()=> {

    beforeEach(()=> {
        cy.visit("https://example.cypress.io/commands/viewport?test=id1#abc")
    })
   
    it.skip('view port',()=>{
        cy.get('#navbar').should('be.visible')
        cy.viewport(320, 480)
        
        // the navbar should have collapse since our screen is smaller
        cy.get('#navbar').should('not.be.visible')
        cy.get('.navbar-toggle').should('be.visible').click()
        cy.get('.nav').find('a').should('be.visible')
        
        // lets see what our app looks like on a super large screen
        cy.viewport(2999, 2999)
        cy.viewport('iphone-3')
    })

    it("hash", ()=> {
        cy.hash().should('equal', "#abc")
    })
    it("location", ()=> {
        cy.location().should((location)=> {
            console.log(location)
        })
    })
    it("Navigation", ()=> {
        cy.contains("Utilities").click();
        cy.screenshot('screen-utilities')
        cy.go(-1)
        cy.reload()
        cy.wait(5000)
        // reload the page without using the cache
        cy.reload(true)
        cy.screenshot('screen-naviagation')
    })
})