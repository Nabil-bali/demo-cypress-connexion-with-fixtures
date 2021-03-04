/// <reference types="cypress" />

import inventoryPage from "../../pageObject/sauceDemo/inventotyPage";
import homePage from "../../pageObject/sauceDemo/homePage";

const invent = new inventoryPage
const homeP = new homePage

context("Test sur les pages object", () => {

    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/')

        cy.fixture('login').as("login")
    })

    describe("Tests without custom command", () => {

        it('test de connexion - OK', () => {

            homeP.usernameInput().type('standard_user')
            homeP.passwordInput().type('secret_sauce')
            homeP.loginButton().click()
            // assertions
            cy.url().should('contain', 'https://www.saucedemo.com/inventory.html')

        })

        it('test de connexion - locked out', () => {

            homeP.usernameInput().type('locked_out_user')
            homeP.passwordInput().type('secret_sauce')
            homeP.loginButton().click()
            // assertions
            homeP.errorMessageForm().should('be.visible')
            cy.url().should('contain', 'https://www.saucedemo.com/')

        })

    })

    describe("Tests with custom commands", () => {

        it('test de connexion - OK standart_user - fixtures', () => {

            cy.get('@login').then((loginData) => {
                cy.loginForm(loginData.standard_user)
            })

            // assertions
            cy.url().should('contain', 'https://www.saucedemo.com/inventory.html')

        })

        it('test de connexion - problem_user - fixtures', () => {

            cy.get('@login').then((loginData) => {
                cy.loginForm(loginData.problem_user)
            })

            // assertions
            cy.url().should('not.contain', 'https://www.saucedemo.com/inventory.html/inventory.html')

        })

    })

})
