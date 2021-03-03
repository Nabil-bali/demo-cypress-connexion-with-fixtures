/// <reference types="cypress" />

describe("Sélectionner des éléments web avec Cypress - partie 2", () => {

    it.only("Méthodes de sélection Cypress", () => {

        cy.visit('https://www.saucedemo.com/inventory.html')

        cy.get('.inventory_list > :nth-child(1)')

        cy.get('.inventory_list').children().first()

        cy.get('.inventory_item').eq(0)

    })


})