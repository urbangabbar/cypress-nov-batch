/// <reference types="cypress" />

describe('Storage', () => {

    beforeEach(() => {
        cy.visit("https://example.cypress.io/commands/storage")
    })


    it("locastorage", () => {
        cy.get('.ls-btn').click()
        cy.getAllLocalStorage().should((storageMap) => {
            expect(storageMap).to.deep.equal({
                'https://example.cypress.io': {
                    'prop1': 'red',
                    'prop2': 'blue',
                    'prop3': 'magenta',
                },
            })
        })
        cy.clearLocalStorage()
        cy.getAllLocalStorage().should((storageMap) => {
            expect(storageMap).to.deep.equal({})
        })
    })
    it("cookies", () => {
        cy.visit("https://example.cypress.io/commands/cookies")
        cy.get('#getCookie .set-a-cookie').click()
        cy.getCookie('token').should((val)=> console.log(val, "getCookie")) 
        cy.setCookie('name', "abhinav")
        cy.clearCookie("token")
        cy.getCookies().should((val)=> console.log(val, "getCookies")) 
    })
})