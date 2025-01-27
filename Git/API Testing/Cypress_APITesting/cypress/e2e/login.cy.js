/// <reference types= "cypress"/>

describe('API testing - Login', () => {
    
    it('Should do a login - POST', () => {
        cy.request({
            method: 'POST',
            url:'login',
            body: {
                // "email":"fulano@qa.com",
                "email":"alterarEmail@email.com.br",
                "password":"teste"
            }
        }).should((response) => {
            expect(response.body.message).to.be.equal('Login realizado com sucesso')
            expect(response.status).to.be.equal(200)
        })
    });
});