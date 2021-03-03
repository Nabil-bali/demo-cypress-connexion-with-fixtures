/// <reference types="cypress" />

describe('Tests sur les Fixtures', () => {

    // - si il y a plusieurs tests dans le describe() ne pas oublier le beforeEach(), pas before()
    beforeEach(function() {

        // then
        cy.fixture('users').then((users) => {
            this.users=users
        })
        
        // alias
        cy.fixture('example').as('example')
    })


    // Avec une variable 
    it.skip('Avec "var"', () => {

        cy.visit('/automation-practice-form')

        // Pas pratique, car cy.fixture va cherhcer directement dans le dossier fixture, 
        // on peut aussi modifier l'emplacement des fixtures

        var example= require('../../fixtures/example.json')
        
        cy.get('#firstName')
        .type(example.name)

    })


    // Avec le .as()
    // .as() est une syntaxe plus lisible
    it('Avec le .as() et le .then()', () => {


        cy.visit('/automation-practice-form')

        cy.get("@example").then((example) => {

            cy.get('#firstName')
            .type(example.name)

        })

        
    })

    


    // Avec le .then() 
    // on peut modifier la donnée avant de l'utiliser (mais utiliser .intercept() )

    it.only("Avec le .then()", function() {

        cy.visit('/automation-practice-form')

        expect(this.users).to.have.length(10)

        cy.get('#firstName')
            .type(this.users[0].name)

        // remplir le formulaire avec les sous-tableaux du JSON

    })
    
})

