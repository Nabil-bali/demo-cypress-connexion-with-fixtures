/// <reference types="cypress" />



describe("Upload un fichier", () => {

    it("Test 1", () => {
        cy.visit('/automation-practice-form')

        // Pour les fichiers json
        // ils sont en général dans le répertoire /fixtures
        // cy.get("#uploadPicture")
        // .attachFile('example.json');

        // Pour les autres formats supportés par défaut par Cypress
        cy.get("#uploadPicture")
        .attachFile({ filePath: 'fichier_texte.txt', encoding: 'utf-8' });

        // réécrire le nom di fichier à la volée (erreur de format)
        // cy.get('#uploadPicture')
        // .attachFile({ filePath: 'fichier_texte.json', fileName: 'fic1.txt' });

        // formats de fichier autorisés par défaut dans Cypress
        //.json, .js, .coffee, .html, .txt, .csv, .png, .jpg, .jpeg, .gif, .tif, .tiff, .zip

        cy.get('#uploadPicture')
        .attachFile({ filePath: 'fichier_texte.txt', fileName: 'fic1.txt' });


    })

})

