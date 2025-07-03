const {spec} = require("pactum");
const {eachLike, like} = require('pactum-matchers');

// addProduct, editProduct, deleteProduct

let token;
beforeEach(async () => {
    token = await spec()
        .post('http://lojaebac.ebaconline.art.br/graphql')
        .withGraphQLQuery(`
        mutation AuthUser($email: String, $password: String) {
            authUser(email: $email, password: $password) {
              success
              token
            }
          }
    `)
        .withGraphQLVariables({
            "email": "admin@admin.com",
            "password": "admin123"
        })
        .returns('data.authUser.token')

})

it('Checking Products return', async () => {

    await spec()
    .post('http://lojaebac.ebaconline.art.br/graphql')
    .withGraphQLQuery(`
        {
          Products {
                name
                price
            }
        }
    `)
    .expectStatus(200)
    .expectBodyContains("name")
    .expectJsonMatch({
        data: {
            Products: eachLike({
                name: like("Nome Product"),
                price: like(120.00),
            })
        }
    })
});

it('Adding new product', async () => {
    await spec()
    .post('http://lojaebac.ebaconline.art.br/graphql')
    .withHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    })
    .withGraphQLQuery(`
        mutation {
            addProduct(
                name: "testeUI"
                price: 100.00
            ) {
                name
                price
            }
        }
    `)
    .expectStatus(200)
    .expectBodyContains("testeUI");
});

it('Editing product', async () => {
    await spec()
    .post('http://lojaebac.ebaconline.art.br/graphql')
    .withHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    })
    .withGraphQLQuery(`
        mutation {
            editProduct(
                id: 1
                name: "testeUIEditado"
                price: 150.00
            ) {
                name
                price
            }
        }
    `)
    .expectStatus(200)
    .expectBodyContains("testeUIEditado");
});

it('Deleting product', async () => {
    await spec()
    .post('http://lojaebac.ebaconline.art.br/graphql')
    .withHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    })
    .withGraphQLQuery(`
        mutation DeleteProduct($deleteProductId: ID!) {
        deleteProduct(id: $deleteProductId) {
            name
            additionalDetails
            visible
            specialPrice
            description
            price
        }
        }
    `)
    .withGraphQLVariables({
        "deleteProductId": 5
    })
    .expectStatus(200)
    .expectBodyContains("null");
});