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

Cypress.Commands.add('createUser', (nome, email, senha, adm) =>{
    cy.request({
        method: 'POST',
        url: 'usuarios',
        body: {
            "nome": nome,
            "email": email,
            "password": senha,
            "administrador": adm              
        }
    }).then(response => {
        return response.body._id;
    })

})