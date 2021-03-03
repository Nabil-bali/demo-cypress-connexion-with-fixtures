/// <reference types="cypress" />

// Démarrer le serveur avant !!!!!!!!!!!!

describe("Exemple de .then() avec historea", () => {

    it('Chercher un score', () => {
  
        cy.visit('http://localhost/historea/?action=result')
    
        cy.get('body').then(($body) => {
    
            if ($body.find('tr:contains(joueur795447)').length) {
                      // input was found, do something else here
                      cy.get('td:contains(joueur795447)').dblclick()
            }
            else{
              cy.get('#suivant').click()
            }
          })
      })
})
