/// <reference types="cypress" />

    describe("Les liens", () => {

        it.skip("Liens ouvrants", () => {

        cy.visit('/links')

        // cy.get('#simpleLink').click()

        // // Puis faire le test avec une assertion sur la page d'après

        // cy.get('.category-cards').contains('Elements')

        // Solution

        // faire l'assertion
        // cy.get('a[href="/foo"]').should('have.attr', 'target', '_blank')

        cy.get('#simpleLink').invoke('removeAttr', 'target').click()

        // l'assertion doit être en succès maintenant

        cy.get('.category-cards').contains('Elements')
        })

        // set webChromeSecurity
        it("Tests multi-domaines", () => {

            cy.visit('/')

            cy.get('.home-banner > a').invoke('removeAttr', 'target').click()

            cy.get('.right-widgets > .show-on-desktop > .facebook').invoke('removeAttr', 'target').click()
            

        })

        it('navigates', () => {
            cy.visit('https://apple.com')
            cy.visit('https://google.com')      // this will error
          })
    })

