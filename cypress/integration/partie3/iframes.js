/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe("Suite de test", () => {

    beforeEach(function() {

        cy.visit('/frames')

    });
    
    it('Test 1', () => {

        cy.get('iframe')

    })

    it("Test 2", () => {
        
          // Avec les méthodes Cypress
          const monIframe = () => {
            return cy.get('iframe#frame1')
            .its('0.contentDocument').its('body')
            .then(cy.wrap)
          }

          // Avec les méthodes Jquery
          const monIframeB = () => {
            return cy.get('iframe#frame1').then(($frame) => {

                let body = $frame.contents().find("body") // ce sont des méthodes JQuery
                cy.wrap(body)
                
            })
          }

        getIframeBody().find('#sampleHeading').should('contain', 'This is a sample page')
        monIframe().find('#sampleHeading')
    })

    it.only('Test 3', () => {

        // Préciser l'iframe
        // cy.frameLoaded('iframe')

        cy.frameLoaded('iframe#frame1')

        // Préciser l'iframe
        // cy.iframe()
        cy.iframe('#frame1').find('#sampleHeading').should('contain', 'This is a sample page')
    })

    
})
