// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')    //importa o arquivo perfil.json (massa de dados)

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
      //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')  forma inicial
        cy.visit('minha-conta') // forma com baseUrl no cypress.config.js
    });

    afterEach(() => {
        cy.screenshot
    });
 
    it('Deve fazer login com sucesso', () => {
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       cy.get('#username').type('jean.teste@teste.com.br')
       cy.get('#password').type('Jlb@1988')
        cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jean.teste (não é jean.teste? Sair)')
         cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('exist')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
         //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       cy.get('#username').type('jean.teste@teste.com.')
       cy.get('#password').type('Jlb@1988')
        cy.get('.woocommerce-form > .button').click()

        //cy.get('.woocommerce-error').should('contain' , 'O usuário jean.teste@teste.com. não está registrado neste site. ')
        cy.get('.woocommerce-error').should('exist')
           
    })

it('Deve exibir mensagem de erro de senha', () => {
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       cy.get('#username').type('jean.teste@teste.com.br')
       cy.get('#password').type('Jlb@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'A senha fornecida para o e-mail jean.teste@teste.com.br está incorreta')
        cy.get ('.woocommerce-error').should('exist')

});
it('Deve fazer login com sucesso usando massa de dados', () => {   //puxa do perfil.json
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jean.teste (não é jean.teste? Sair)')
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('exist')
});
it.only('Deve fazer login com sucesso usando Fixture', () => {
    cy.fixture('perfil').then(dados => {
        cy.get('#username').type(dados.usuario, {log: false})    //p/ n/ mostrar o nome no log do cypress
        cy.get('#password').type(dados.senha, {log: false})   // p/ n/ mostrar a senha no log do cypress
        cy.get('.woocommerce-form > .button').click()   
})
});
it('Deve fazer login usando comando customizado', () => {
    cy.login('jean.teste@teste.com.br', 'Jlb@1988')   // usando comando customizado criado em commands.js //poderia usar FAKER/FIXTURE/MASSA DE DADOS
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jean.teste (não é jean.teste? Sair)')
})
})