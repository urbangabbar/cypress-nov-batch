/// <reference types="cypress" />

describe("Traversal", () => {

    beforeEach(() => {
        cy.visit("https://example.cypress.io/commands/traversal")
    })

    it.skip("closest", () => {
        const badge = cy.get('.traversal-badge');
        badge.should("contain", "54")

        badge.closest(".col-xs-12").should("exist")
    })
    it("eq", () => {
        cy.get('.traversal-list>li')
            .eq(0).should('contain', 'tabby');

        cy.get('.traversal-list>li:nth-child(1)').should('contain', 'tabby');
    })
    it("filter", () => {
        cy.get('.traversal-nav>li')
            .filter('.active').should('contain', 'About')
    })
    it("find", () => {
        cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7)
    })
    it("first", () => {
        cy.get('.traversal-table td')
            .first().should('contain', '1')
    })
    it("last", () => {
        cy.get('.traversal-table td')
            .last().should('contain', 'Doe')
    })
    it("next", () => {
        cy.get('.traversal-table td')
            .first().next().next().should('contain', 'Lane')
    })
    it("nextall", () => {
        cy.get('.traversal-next-all')
            .contains('oranges')
            .nextAll().should('have.length', 3)
    })
    it("nextuntill", () => {
        cy.get('#veggies')
            .nextUntil('#nuts').should('have.length', 3)
    })
    it("not", () => {
        cy.get('.traversal-disabled .btn')
            .not('[disabled]').should('not.contain', 'Disabled')
    })
    it("parent", () => {
        cy.get('.traversal-mark')
            .parent().should('contain', 'Morbi leo risus')
    })
})