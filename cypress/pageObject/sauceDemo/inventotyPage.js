class inventoryPage {

    buttonPanier() {
        return cy.get("#shopping_cart_container")
    }

    carteProduit() {
        return cy.get('.inventory_item')
    }

    butonnCarteProduit() {
        return cy.get('.inventory_item').find('button')
    }
}

export default inventoryPage