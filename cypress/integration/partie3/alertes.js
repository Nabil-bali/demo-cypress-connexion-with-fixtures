/// <reference types="cypress" />

describe("Alertes", () => {

    //alert
    // confirm box
    // prompt

    beforeEach(function() {

        cy.visit('/alerts')

    });


    it("Alerte", () => {
        

        cy.get('#alertButton').click()

        // L'alerte a été détectée
        // Comment faire une assertion sur une alerte ?

        cy.on('window:alert', (str) => {
            expect(str).to.deep.eq('You clicked a button')
        })
    })

    it("Confirm box", () => {

        cy.get('#confirmButton').click()

        cy.on('window:confirm', (str) => {
            expect(str).to.deep.eq('Do you confirm action?')
            return false
        })

        cy.get('#confirmResult').should("have.text", "You selected Cancel")

    })
 
    it("Prompt", () => {

        // cy.get('#promtButton').click()
        
        // return la fenetre courante
        // il faut résoudre la méthode d'abord
        cy.window().then(win => {
            // on renseigne l'objet et la méthode
            cy.stub(win, 'prompt').returns('Nabil')
        })

        cy.get('#promtButton').click()

        cy.get('#promptResult').should("have.text", "You entered Nabil")

    })

    it.skip("urls", () => {

        cy.visit(Cypress.env('url'))
        
    })
})

