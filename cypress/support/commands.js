// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.

import inventoryPage from "../pageObject/sauceDemo/inventotyPage";
import homePage from "../pageObject/sauceDemo/homePage"

const invent = new inventoryPage
const homeP = new homePage

// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })

Cypress.Commands.add('loginForm', (data) => {

    homeP.usernameInput().type(data.login)
    homeP.passwordInput().type(data.password)
    homeP.loginButton().click()

})

Cypress.Commands.add("calcNbrArticlePanier", (nbrTrue) => {
    let quantity = 0
        cy.get("#cart_contents_container").find(".cart_quantity").each(($el, index, $list) => {
            quantity += parseInt($el.text())
        }).then(() => {
            expect(quantity).to.deep.eq(nbrTrue)
        })
})

Cypress.Commands.add("formulaireCheckout", (nom, prenom, codePostal) => {

    cy.get("#checkout_info_container").find("form").within(($form) => {

        cy.get('[data-test=firstName]').type(nom)

        cy.get('[data-test=lastName]').type(prenom)

        cy.get('[data-test=postalCode]').type(codePostal)

        cy.wrap($form).submit()
    })

})

// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })


Cypress.Commands.add("ajouterTousLesProduits", () => {

    // carteProduit()
    // butonnCarteProduit()
    invent.carteProduit().each(($el, index, $list) => {

        cy.wrap($el).find('button').then(($btn) => {

            if($btn.text() == "ADD TO CART") {

                cy.wrap($btn).click()
            }
        })
    })
})

// Cypress.Commands.add("ajouterTousLesProduits", () => {

//     // carteProduit()
//     // butonnCarteProduit()
//     cy.get('.inventory_item').each(($el, index, $list) => {

//         cy.wrap($el).find('button').then(($btn) => {

//             if($btn.text() == "ADD TO CART") {

//                 cy.wrap($btn).click()
//             }
//         })
//     })
// })

Cypress.Commands.add("ajouterProduitsMotCle", (keyword) => {

    // carteProduit()
    // butonnCarteProduit()
    cy.get('.inventory_item').each(($el, index, $list) => {

        cy.wrap($el).find('button').then(($btn) => {

            if($btn.text() == "ADD TO CART") {

                cy.wrap($btn).click()
            }
        })
    })
})

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';
import 'cypress-iframe'
import '@4tw/cypress-drag-drop'