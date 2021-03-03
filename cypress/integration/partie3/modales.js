/// <reference types="cypress" />


    describe("Naviguer à travers les pages web", () => {

        it("Test 1", () => {

        cy.visit('/modal-dialogs')
        

        cy.get('#showSmallModal').click()

        cy.get('.modal-body').should('have.text', 'This is a small modal. It has very less content')

        })

    })
