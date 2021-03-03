/// <reference types="cypress" />

describe("Utiliser le cy.wrap()", () => {

    it("Test 1", () => {
        cy.visit('https://www.saucedemo.com/index.html')

        cy.get('form').as("myForm")

        cy.log("@myForm")
        cy.log(cy.get('form'))

        cy.get('form').within(($form) => {
            // ... more commands


            cy.log($form)

            cy.wrap($form).find('input')

        })


    })

})


