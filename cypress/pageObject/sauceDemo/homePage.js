class homePage {

    usernameInput () {
        return cy.get('[data-test=username]')
    }

    passwordInput() {
        return cy.get('[data-test=password]')
    }

    loginButton() {
        return cy.get('#login-button')
    }

    errorMessageForm() {
        return cy.get('[data-test=error]')
    }

}

export default homePage