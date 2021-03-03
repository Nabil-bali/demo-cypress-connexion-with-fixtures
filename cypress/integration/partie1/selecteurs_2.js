/// <reference types="cypress" />

describe("Sélectionner des éléments web avec Cypress - partie 2", () => {

    beforeEach( () => {

        cy.visit('https://www.vianavigo.com/accueil')

    }) 

    it("Méthodes de sélection Cypress", () => {

        // find
        cy.get('.nav-footer').find("li:nth-child(1)")

        // children
        cy.get('.nav-footer').children()
        
        // parent
        cy.get('.nav-footer').parent()

        // eq(2) - commence depuis 0
        cy.get('.nav-footer').find('li').eq(1)

        // Within

        // .not()
    })

    it("Autres méthodes", () => {

        cy.visit('https://www.vianavigo.com/infos-trafic/lignes')

        // first()
        cy.get("ul.list-transport-mode-disruption").first()

        .find('li').eq(2)

        // last()
        cy.get("ul.list-transport-mode-disruption").last()

        // .next()
        // .prev()
        cy.get("ul.list-transport-mode-disruption").first()

        .find('li').eq(2).next()

    })

    it("within", () => {

        cy.visit('https://www.vianavigo.com/connexion')

        cy.get('form').within(($el) => {

            // $el = objet form
            cy.get('input:first')

        })

    })
    
})