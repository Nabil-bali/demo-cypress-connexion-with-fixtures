/// <reference types="cypress" />

import inventoryPage from "../../pageObject/sauceDemo/inventotyPage";
import homePage from "../../pageObject/sauceDemo/homePage";

const invent = new inventoryPage
const homeP = new homePage

describe("Test sur les pages object", () => {

    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/')

        cy.fixture('login').as("login")
    }) 


    it.skip('test de connexion - OK', () => {

        homeP.usernameInput().type('standard_user')
        homeP.passwordInput().type('secret_sauce')
        homeP.loginButton().click()
        // assertions
        cy.url().should('contain','https://www.saucedemo.com/inventory.html')
        
    })

    it.skip('test de connexion - locked out', () => {

        homeP.usernameInput().type('locked_out_user')
        homeP.passwordInput().type('secret_sauce')
        homeP.loginButton().click()
        // assertions
        homeP.errorMessageForm().should('be.visible')
        cy.url().should('contain','https://www.saucedemo.com/')
        
    })

    it('test de connexion - OK - fixtures', () => {

        cy.get('@login').then((loginData) => {
            cy.loginForm(loginData.standard_user)
        })
        
        // assertions
        cy.url().should('contain','https://www.saucedemo.com/inventory.html')
        
    })

    it('test de connexion - problem_user - fixtures', () => {

        cy.get('@login').then((loginData) => {
            cy.loginForm(loginData.problem_user)
        })
        
        // assertions
        cy.url().should('not.contain','https://www.saucedemo.com/inventory.html/inventory.html')
        
    })


    it.skip('test', () => {

        cy.visit('/inventory.html')

        cy.ajouterTousLesProduits()
        let nbrTotal = 6

        // Voir le panier
        // cy.get("#shopping_cart_container").click()
        invent.buttonPanier().click()
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