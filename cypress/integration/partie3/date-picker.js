/// <reference types="cypress" />


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


describe("Manipuler les date-picker", () => {

    it("Test 1 : date-picker", () => {
        cy.visit('/automation-practice-form')

        // récupérer la date du jour avec le bon format
        function getDateFormatDatepicker(nombreJour) {
    
            var day = new Date(Date.now() + 86400000 * nombreJour);

            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ];
        
            var jtoday = day.getDate()    
            var mtoday = day.getMonth()
            var atoday = day.getFullYear()

            mtoday = monthNames[mtoday].substring(0, 3)
        
            var todayDate = jtoday + ' ' + mtoday + ' ' +  atoday
            
            return todayDate
        }

        cy.get('#dateOfBirthInput').click()

        // (2) faire les assertions sur la visibilité des éléments dans le datepicker
        cy.get('.react-datepicker').should('be.visible')
        cy.get('.react-datepicker__month-select').should('be.visible')
        cy.get('.react-datepicker__year-select').should('be.visible')
        cy.get('.react-datepicker__month').should('be.visible')
        cy.get('[aria-label="Previous Month"]').should('be.visible')
        cy.get('[aria-label="Next Month"]').should('be.visible')

        // (3) manipuler les options du date picker //  NE PAS EXECUTER
        // 
            // // sélectionner la date
            // cy.get('.react-datepicker__month-select').select('April')
            // // sélectionner le mois
            // cy.get('.react-datepicker__year-select').select('2020')
            // // sélectionner l'année
            // cy.get('.react-datepicker__month').find('div[aria-label]').each(($el, index, $list) => {
            //     // $el is a wrapped jQuery element
            //     if ($el.text().includes("3")) {
            //       // wrap this element so we can
            //       // use cypress commands on it
            //       cy.wrap($el).click()
            //     } else {
            //       // do something else
            //     }
            //   })

        // (1) Sélectionner la date en modifiant l'attribut "value"
        let dDate =  getDateFormatDatepicker(2)
        // On peut pas effacer la valeur de la date, dont on la remplace en utilisant une fonction 
        cy.get('#dateOfBirthInput').invoke('val', dDate)


    })
})
