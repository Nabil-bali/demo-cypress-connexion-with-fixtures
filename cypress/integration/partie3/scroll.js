/// <reference types="cypress" />

import 'cypress-iframe'

describe("Manipuler le scroll", () => {

    it("Test 1", () => {
        cy.visit('https://docs.cypress.io/api/commands/scrollto.html')

        // peu d'intérêt 
        // cy.get('#sidebar').scrollIntoView() 

        // cy.get('#sidebar').scrollTo("bottom", { duration: 2000 }, { easing: 'linear' }, { offset: { top: -100, left: 0 } })

        // scroller sur la page entière
        // cy.scrollTo('bottom', { duration: 3000 })

        // utiliser un pourcentage de la fenêtre ou de l'élément
        // cy.scrollTo('0%', '50%',{ duration: 3000 }, { ensureScrollable: false})

        // cy.get('#sidebar').scrollTo("bottom", { duration: 3000 })

        // cy.get('#sidebar').scrollTo('0%', '50%', { duration: 3000 })

        // cy.get('.sidebar-title.current > strong').scrollIntoView()

        // ajouter un offset pour que l'élément ne soit pas cahcer pas la navbar
        cy.get('.sidebar-title.current > strong').scrollIntoView({ offset: { top: -70, left: 0 } })

    })
})

