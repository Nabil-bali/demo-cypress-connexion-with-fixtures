/// <reference types="cypress" />

describe('Tests sur les commandes customisées', () => {

    it('test', () => {

        cy.visit("https://www.saucedemo.com/inventory.html")

        cy.ajouterTousLesProduits()
        let nbrTotal = 6

        // Voir le panier
        cy.get("#shopping_cart_container").click()
        cy.url().should('contain', '/cart.html')

        // Calculer le nombre d'articles dans le panier
        cy.calcNbrArticlePanier(nbrTotal)

        // Valider le panier
        cy.get(".btn_action.checkout_button").click()
        cy.url().should('contain', '/checkout-step-one.html')

        // Remplir le formulaire 
        cy.formulaireCheckout("Gowall", "Nabil", "75111")

        // ceci est utile pour :
        // Rendre les test plus lisibles
        // réutiliser cette commande ailleurs
        // tester différend jeux de données

        // Finaliser l'achat
        cy.get(".btn_action").contains("FINISH").click()
        cy.url().should('contain', '/checkout-complete.html')
        cy.get(".checkout_complete_container").should('contain', 'THANK YOU FOR YOUR ORDER')
        

    })

})
