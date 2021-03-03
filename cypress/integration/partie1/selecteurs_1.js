/// <reference types="cypress" />

describe("Sélectionner des éléments web avec Cypress - partie 1", () => {

    beforeEach( () => {

        cy.visit('https://www.vianavigo.com/accueil')

    }) 

    it("Test 1", () => {

        // get
        cy.get('.cta-action-beta')

        // alias
        cy.get('a').contains('Me connecter').as('btnConnexion')

        cy.get("@btnConnexion").click({force: true})

    })

    it("Test 2", () => {

        // sélecteur css
        cy.get('.home').find('.main-form-itinerary')

        cy.get('#autocompleteDepartInput')

    })

    it("Test 3", () => {
        // cas complexe
        cy.get(':nth-child(2) > .cta-nav-footer-level-1 > span')
        
    })

})