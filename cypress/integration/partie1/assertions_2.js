/// <reference types="cypress" />

describe("Faire des assertions dans Cypress", () => {

    it("cy.title(), cy.url(), cy.location()", () => {

        cy.visit('https://www.saucedemo.com/index.html')

        // avec le "eq" il faut saisir le texte exact
        cy.title().should('eq', 'Swag Labs')

        cy.url().should('eq', 'https://www.saucedemo.com/index.html')

        cy.url().should('include', '/index.html')

        cy.location('pathname').should('eq', '/index.html')

        cy.location('protocol').should('eq', 'https:')

        // cy.location('protocol').should('eq', 'http:')


        // cy.location().should((location) => {
            //     expect(location.hash).to.be.empty
            //     expect(location.href).to.eq('https://example.cypress.io/commands/location')
            //     expect(location.host).to.eq('example.cypress.io')
            //     expect(location.hostname).to.eq('example.cypress.io')
            //     expect(location.origin).to.eq('https://example.cypress.io')
            //     expect(location.pathname).to.eq('/commands/location')
            //     expect(location.port).to.eq('')
            //     expect(location.protocol).to.eq('https:')
            //     expect(location.search).to.be.empty
            //   })

    })

    it('Sélectionner un trajet, et consulter l\'itinéraire', () => {

        cy.visit("https://www.vianavigo.com/accueil")

        // saisir le départ et l'arrivée
        cy.get('#autocompleteDepartInput').type("Gare de Lyon")

        cy.get('#autocompleteArriveeInput').type("trocadero, Paris")

        // cliquer sur rechercher
        cy.get('.input-submit').click()

        // valider la premier choix proposé
        cy.get('.main-form-def-itinerary > .input-submit').click()


        // ASSERTIONS
        /*
        Le lieu de départ doit contenir "Gare de Lyon"

        Le lieu d'arrivée doit contenir Trocadéro"

        Il doit être possible de modifier la recherche
        */
        cy.get('p.text-dest-resume-itinerary').should('contain', 'Gare de Lyon')

        cy.get('p.text-dest-resume-itinerary').should('contain', 'Trocadéro')

        cy.get('a.cta-modif-itinerary').should('be.visible')
        .click()

        cy.get('.main-form-itinerary').should('be.visible')
        

    })

        
    
})