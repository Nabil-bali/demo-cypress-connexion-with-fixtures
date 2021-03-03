/// <reference types="cypress" />

describe('Comprendre les variables d\'environnement', () => {

    // Cypress.config("pageLoadTimeout", "2000")

    it('test 1 ', () => {

        Cypress.config("pageLoadTimeout", "2000")

        cy.visit("https://www.saucedemo.c")

    })

    it('test 2 ', () => {

        cy.visit("https://www.saucedemo.c")
        // le timeout s'applique à toute la page

    })

})
