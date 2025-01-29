/// <reference types="cypress" />
import contract from "../Contracts/usuarios.contract"
const faker = require('faker');

describe('Testes da Funcionalidade Usuários', () => {
        
    it('Deve validar contrato de usuários', () => {
      cy.request('usuarios').then( response => {
        return contract.validateAsync(response.body)
      })
    });
  
    it('Deve listar usuários cadastrados - GET', () => {
        cy.request({
            method: 'GET',
            url: 'usuarios'
        }).then((response)=> {
            expect(response.body).to.have.property('usuarios')
            expect(response.status).to.be.equal(200)
        })
    });
  
    it('Deve cadastrar um usuário com sucesso - POST', () => {
        cy.request({
            method: 'POST',
            url: 'usuarios',
            body: {
                "nome": "Mariano da Silva",
                "email": faker.internet.email(),
                "password": "T1234@",
                "administrador": "true"              
            }
        }).then(response => {
            expect(response.status).to.be.eq(201)
            expect(response.body.message).to.be.equal('Cadastro realizado com sucesso')
        })
    }); 
  
    it('Deve validar um usuário com email inválido - POST', () => {
        cy.request({
            method: 'POST',
            url: 'usuarios',
            body: {
                "nome": "Mariano da Silva",
                "email": '  @.com',
                "password": "T1234@",
                "administrador": "true"              
            },failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.be.eq(400)
            expect(response.body.email).to.be.equal('email deve ser um email válido')
        })
    });
  
    it('Deve editar um usuário previamente cadastrado - PUT', () => {
        cy.createUser('Antonio Lacerda', faker.internet.email(), 'T3$te', 'false' )
        .then( returnedID => {
            cy.request({
                method: 'PUT',
                url: 'usuarios/'+returnedID,
                body: {
                    "nome": "Beltrano da Silva",
                    "email": faker.internet.email(),
                    "password": "teste",
                    "administrador": 'true'
                }
            }).then(response => {
                expect(response.status).to.be.equal(200)
                expect(response.body.message).to.be.equal('Registro alterado com sucesso')
            })
        })
    });
  
    it('Deve deletar um usuário previamente cadastrado', () => {
        cy.createUser('Cristina Marcela', faker.internet.email(), 'T3$te', 'false' )
        .then( returnedID => {
            cy.request({
                method: 'DELETE',
                url: 'usuarios/'+returnedID,
            }).then(response => {
                expect(response.status).to.be.equal(200)
                expect(response.body.message).to.be.equal('Registro excluído com sucesso')
            })
        })
    });
  });