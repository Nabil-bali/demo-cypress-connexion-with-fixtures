/// <reference types="cypress" />


describe("Naviguer de page en page", () => {


    it.only("Ecrire un test simple sur 'saucedemo.com' ", () => {

        cy.visit('https://www.saucedemo.com/index.html')

        cy.get('[data-test=username]').type('standard_user')

        cy.get('[data-test=password]').type('secret_sauce')

        cy.get('#login-button').click()

    })

    it("Ecrire un test simple sur 'vianavigo.com'", () => {

        cy.visit('https://www.vianavigo.com/accueil')

        cy.get('#autocompleteDepartInput').type("Gare de Lyon")

        /*
        faire une remarque, sur le fait qu'il y a peut être une étape supplémentaire
        */
        cy.get('#autocompleteArriveeInput').type("Pointe du Lac , Créteil")

        // cliquer sur rechercher
        cy.get('.input-submit').click()


        // cy.get('.cta-action-beta').click()
        // cy.get('.main-form-def-itinerary > .input-submit').click()
    })

})

