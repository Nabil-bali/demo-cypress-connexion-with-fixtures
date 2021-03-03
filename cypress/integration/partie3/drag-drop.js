/// <reference types="cypress" />

import '@4tw/cypress-drag-drop'

describe("Drag & drop", () => {

    it("Test 1", () => {
        cy.visit('/droppable')

        cy.get('#simpleDropContainer > #droppable > p').should('contain', 'Drop here')

        cy.get('#draggable').trigger('mousedown', {force: true})

        cy.get("#droppable").trigger('mouseover',  {force: true}).trigger('mouseup')

        cy.get('#simpleDropContainer > #droppable > p').should('contain', 'Dropped!')

    })


    it.only("Le plugin cypress-drag-drop", () => {

        cy.visit('/droppable')

        cy.get('#draggable').drag('#droppable ', {force: true})

        cy.get('#simpleDropContainer > #droppable > p').should('contain', 'Dropped!')

        // Utiliser le cy.reload()
        
        cy.reload()

        cy.get('#simpleDropContainer > #droppable > p').should('contain', 'Drop here')

    })

})

