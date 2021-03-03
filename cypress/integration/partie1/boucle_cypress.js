/// <reference types="cypress" />


describe("Itérations au sein d'un élément", () => {

    it("Test 1", () => {
        cy.visit('https://www.saucedemo.com/inventory.html')

        cy.get('.inventory_item')
            .each(($el, index, $list) => {
                // $el is a wrapped jQuery element
                if ($el.text().includes('Sauce')) {
                    // wrap this element so we can
                    // use cypress commands on it
                    cy.wrap($el).find('button').click()

                }
            })

    })

    it('Dropdown dynamique - choisir un destination et arrivée', () => {

        //Dynamic dropdowns
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($e1, index, $list) => {

            if ($e1.text() === "India") {
                $e1.click()
            }
        })
    })

})

