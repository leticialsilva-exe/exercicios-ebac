/// <reference types= "cypress"/>
import contract from "../Contracts/produtos.contract"
describe('API testing - Product', () => {

    let token;
    beforeEach(() => {
        cy.getToken('alterarEmail@email.com.br','teste')
        .then((tk)=>{
            token = tk;
        })
    });

    it.only('Should validate Products Contract ', () => {
        cy.request('produtos').then(response => {
            return contract.validateAsync(response.body)
        })
    });

    
    it('Should list products - GET ', () => {
        cy.request({
            method: 'GET',
            url:'produtos',
        }).then((response) => {
            // cy.log(response.body.produtos[0]._id)
            expect(response.body).to.have.property('produtos')
            expect(response.status).to.be.equal(200)
        })
    });

    it('Should create a product - POST ', () => {
        let randomNum = Math.floor(Math.random() *1000);
        cy.request({
            method: 'POST',
            url:'produtos',
            headers: {"authorization": token},
            body: {
                "nome":"Cabo USB C V"+randomNum,
                "preco": 12,
                "descricao":"Cabo USB Type C",
                "quantidade": 100
            }
        }).should((response) => {
            expect(response.body.message).to.be.equal('Cadastro realizado com sucesso')
            expect(response.status).to.be.equal(201)
        })
    });

    it('Should try to create a product with same name - POST ', () => {
        cy.request({
            method: 'POST',
            url:'produtos',
            headers: {"authorization": token},
            body: {
            "nome":"Cabo USB C" ,
                "preco": 12,
                "descricao":"Cabo USB Type C",
                "quantidade": 100
            },
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.be.equal(400)
            expect(response.body.message).to.be.equal('Já existe produto com esse nome')
        })
    });

    it('Should alter a product - PUT ', () => {
        let randomNum = Math.floor(Math.random()*1000);

        cy.createProduct("Produto para alterar"+randomNum,12,"Alter test",100, token)
        .then((id) =>{
            randomNum = Math.floor(Math.random()*1000);
            cy.request({
                method: 'PUT',
                url:'produtos/'+id,
                headers: {"authorization": token},
                body: {
                    "nome":"Altered " + randomNum ,
                    "preco": 15,
                    "descricao":"Cabo USB Type C",
                    "quantidade": 100
                },
                failOnStatusCode: false
            }).should((response) => {
                expect(response.status).to.be.equal(200)
                expect(response.body.message).to.be.equal('Registro alterado com sucesso')
            })    
        })
    });

    it('Should delete a product - DELETE ', () => {
        let randomNum = Math.floor(Math.random()*1000);

        cy.createProduct("Produto para delete"+randomNum,12,"Delete test",100, token)
        .then((id) =>{
            cy.request({
                method: 'DELETE',
                url:'produtos/'+id,
                headers: {"authorization": token},
            }).should((response) => {
                expect(response.status).to.be.equal(200)
                expect(response.body.message).to.be.equal('Registro excluído com sucesso')
            })
        });




    });

});