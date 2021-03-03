/// <reference types="cypress" />

    describe("Suite de test", () => {

        it("Test 1", () => {

        console.log('Premier')
        console.log('Deuxième')
        console.log('Troisème')

        })

        it.only("Test 2", () => {

            // cy.log('1')
            // cy.log('2')
            // cy.wait(5000)
            // cy.log('3')

            console.log('1')
            console.log('2')
            cy.wait(5000)
            console.log('3')
    
            })

            it("Test 3", () => {

                console.log('Premier pas de test')
                cy.wait(5000).then(() => {
                    console.log('5 secondes après')
                })
        
            })
    })
