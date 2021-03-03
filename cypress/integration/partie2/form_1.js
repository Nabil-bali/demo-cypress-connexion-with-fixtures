/// <reference types="cypress" />

describe("Les formulaires", () => {

    it.skip("Test 1 ", () => {

        cy.visit('https://demoqa.com/automation-practice-form')

        // .within() => préciser le formulaire
        cy.get("#userForm").within(($formulaire) => {

            // cy.get('#firstName').type("NOM")
            // .type('{enter}') .clear()

            cy.get('#firstName').type("NOM")
            cy.get('#lastName').type("Prenom")
            cy.get('#userEmail').type("Prenom.nom@gmail.com")

            // boutons radio
            //      cy.get('[type="radio"]').check() 
            cy.get('[type="radio"][name="gender"]').check("Female", { force: true })

            cy.get('#userNumber').type("0606060606")

            // datepicker (PLUS TARD)

            // checkbox
            cy.get('[type="checkbox"]').check({ force: true })

            cy.get('[type="checkbox"]').last().uncheck({ force: true })

            // faire une assertion
            cy.get('[type="checkbox"]').last().should('not.be.checked')

            // cocher plusieurs checkbox
            cy.get('[type="checkbox"]').uncheck("Sport", "Reading",{ force: true })

            // choisir un fichier (PLUS TARD)

            // menu de sélection
            cy.get('#state').click()
                // pas de select(ici)
                .contains('NCR').click("center", { force: true })

            // faire un should be disabled pour le 2e menu de sélection

            // submit
            cy.wrap($formulaire).submit()
        })



    })

    it("Dropdown dynamic", () => {
        cy.visit('/auto-complete')

        //menu de sélection dynamique
        cy.get('#autoCompleteMultipleContainer').type("r")
        cy.get('div.auto-complete__menu').contains('Red').click()
    })
})