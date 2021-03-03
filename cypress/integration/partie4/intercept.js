/// <reference types="cypress" />

describe('Tests sur les Fixtures', () => {

    it('Test', () => {

        user.firstName = 'Jane'
        cy.intercept('GET', '/users/1', user).as('getUser')
        

        cy.visit('https://jsonplaceholder.typicode.com//users')
        cy.wait('@getUser').then(({ request })  => {
        expect(request.body.firstName).to.eq('Jane')

        })
    })
})
