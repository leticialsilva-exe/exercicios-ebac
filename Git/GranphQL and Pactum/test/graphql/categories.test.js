// test.js
const { spec } = require("pactum")
const { eachLike, like } = require('pactum-matchers');

// addCategory, editCategory, deleteCategory

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

it('Checking Categories return', async () => {

    await spec()
    .post('http://lojaebac.ebaconline.art.br/graphql')
    .withGraphQLQuery(`
        {
          Categories {
                name
                photo
            }
        }
    `)
    .expectStatus(200)
    .expectBodyContains("name")
    .expectJsonMatch({
        data: {
            Categories: eachLike({
                name: like("Nome Categoria"),
                photo: like("https://lojaebac.ebaconline.art.br/wp-content/uploads/2020/10/categorias-1.png"),
            })
        }
    })
});

it('Adding new category', async () => {
    
    await spec()
    .post('http://lojaebac.ebaconline.art.br/graphql')
    .withGraphQLQuery(`
        mutation {
            addCategory(
                name: "testeUI"
                photo: "Testeink"
            ) {
                name
                photo
            }
        }
    `)
    .returns('data.addCategory')
    .expectStatus(200)
    .expectBodyContains("testeUI");


});

it('Alter category by ID', async () => {

    const returnValue = await spec()
    .post('http://lojaebac.ebaconline.art.br/graphql')
    .withGraphQLQuery(`
        mutation {
            editCategory(
                id: "3"
                name: "testeUI"
                photo: "Testeink"
            ) {
                name
                photo
            }
        }
    `)
    .returns('data.editCategory.name')
    .expectStatus(200)
    .expectBodyContains("testeUI"); //is not returning the name , as if this is not working

});

it('Delete category by ID', async () => {  
    
    await spec()
    .post('http://lojaebac.ebaconline.art.br/graphql')
    .withGraphQLQuery(`
        mutation {
            deleteCategory(
                id: "6"
            ) {
                name
                photo
            }
        }
    `)
    .returns('data.deleteCategory')
    .expectStatus(200)
    .expectBodyContains("null");
});