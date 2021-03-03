/// <reference types="cypress" />

describe("Faire des assertions dans Cypress - partie 1", () => {

    it("should et and", () => {
        cy.visit('https://www.saucedemo.com/inventory.html')

        // should
        cy.get('.product_label').should("have.text", "Products")

        // cy.get('.product_label').should("have.text", "Product")

        cy.get('.product_label').should("contain", "Prod")

        // assertions sur plusieurs éléments
        cy.get('.product_label')
            .should("not.contain", "Contact")
            .parent()
            .parent()
            .should("have.class", "header_secondary_container")


        // should et and
        cy.get('.footer')
            .should("be.visible")
            .and("exist")


        // Exemple
        // remarque : pas d'hexadecimal
        cy.get('.inventory_item').eq(0).find('.btn_primary')
            .should("have.class", "btn_inventory")
            .and('have.css', 'color', 'rgb(226, 35, 26)')

    })

    // CAS PRATIQUE : FERMER LE BANDEAU COOKIES

    it('Fermer le bandeau pour Accepter/refuser les cookies', () => {

        cy.visit("https://www.vianavigo.com/accueil")

        // le bandeau est visible
        cy.get('.wrap-cookies').should('be.visible')
            // cliquer sur Accepter
            .find('.cta-close-cookies').click()

        // le bandeau n'est plus visible
        cy.get('.wrap-cookies').should('not.exist')

    })

    it("cy.document()", () => {

        cy.visit("https://www.vianavigo.com/accueil")

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')

    })
})


