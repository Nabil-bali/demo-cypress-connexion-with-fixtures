/// <reference types="cypress" />

describe("Naviguer à travers l'application", () => {

    // configurer le fichier cypress.json
    // réécrire les cy.visit()
    //
    // Utiliser cy.go() pour naviguer entre les step d'un test
    //
    // cliquer sur lien ouvrant

    it('Utiliser le cy.visit()', () => {

        cy.visit('/elements')

        cy.visit('/forms')

    })

    it("utiliser la méthode cy.go()", () => {
        cy.visit('/')

        cy.get('.category-cards').contains('Elements').click()

        // assertion sur l'url
        cy.url().should('eq', 'https://demoqa.com/elements')
        cy.url().should('eq', Cypress.config().baseUrl + '/elements')

        cy.go('back')

        cy.get('.category-cards').contains('Forms').click()

        // assertion sur l'url
        cy.url().should('eq', 'https://demoqa.com/forms')

        // cy.go('back').go('forward')

        cy.get(':nth-child(1) > .group-header > .header-wrapper').click()
        cy.get('.menu-list').find('li').eq(0).click({ force: true })

        // on revient deux fois en arrière
        cy.go(-2)

    })

})
