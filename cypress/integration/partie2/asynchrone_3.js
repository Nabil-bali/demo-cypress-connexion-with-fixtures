/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("Suite de test", () => {

    it.skip("Utiliser le .then()", () => {

        cy.visit('https://www.saucedemo.com/inventory.html')

        cy.get('.inventory_item').eq(0).find(".inventory_item_name").then(($el) => {

            const testProduct = $el.text()

            expect(testProduct).to.deep.eq("Sauce Labs Backpack")
        }) 

    })

    

    it('Dropdown dynamique - Utiliser le .then() pour choisir un destination et arrivée', () => {

        cy.visit("https://www.vianavigo.com/accueil")

        // saisir le départ et l'arrivée
        cy.get('#autocompleteDepartInput').as("depart")
        .type("Gare de Lyon")
        .parent().find("li[role=option]").eq(0).find(".text-block-autocomplete")

        .then(($el) => {

            const gareDepart = $el.text()

            // cy.contains(gareDepart).click()
            cy.get("@depart").clear().type(gareDepart)
        })
    
        // AFAIRE !!!!!!!!!!!!!!!!!!!!

        cy.get('#autocompleteArriveeInput').as("Arrivée")
        .type("trocadero")
        .parent().find("li[role=option]").eq(0).find(".text-block-autocomplete")
        

        /*
        On doit résoudre manuellement la promesse avec le then
        Ces concept sont un peu difficiles, mais ce qui vient après est plus simple, et nous allons faire des exos
        */
        .then(($el) => {

            const gardeArrivee = $el.text()

            cy.get("@Arrivée").clear().type(gardeArrivee)
        })

        // cliquer sur rechercher
        cy.get('.input-submit').click()

        cy.get('.main-form-def-itinerary > .input-submit').click()
    })
})
