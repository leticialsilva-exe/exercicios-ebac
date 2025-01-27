// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('getToken', (email, password) => { 
    cy.request({
        method: 'POST',
        url:'login',
        body: {
            // "email":"fulano@qa.com",
            "email":email,
            "password":password
        }
    }).then((response) => {
        return response.body.authorization
    })
 })

 Cypress.Commands.add('createProduct', (nome, preco, descricao, quantidade, token) => {
    cy.request({
        method: 'POST',
        url:'produtos',
        headers: {"authorization": token},
        body: {
            "nome": nome,
            "preco": preco,
            "descricao": descricao ,
            "quantidade": quantidade
        }
    }).then( (response) => {
        return response.body._id
    })
})


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })