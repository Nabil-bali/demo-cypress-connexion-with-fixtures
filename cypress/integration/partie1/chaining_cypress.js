/// <reference types="cypress" />

describe("Ecrire des test dans Cypress", () => {

    it("Test 1", () => {

        cy.visit('https://www.saucedemo.com/index.html')

        cy.get("input").contains("Login").click()

        // cy.get("body").get("input").contains("Login")

        // cy.click()
    })

})