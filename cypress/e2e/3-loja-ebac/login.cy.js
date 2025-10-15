/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {
  
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       cy.get('#username').type('jean.teste@teste.com.br')
       cy.get('#password').type('Jlb@1988')
        cy.get('.woocommerce-form > .button').click()


         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jean.teste (não é jean.teste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
         cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       cy.get('#username').type('jean.teste@teste.com.')
       cy.get('#password').type('Jlb@1988')
        cy.get('.woocommerce-form > .button').click()

        //cy.get('.woocommerce-error').should('contain' , 'O usuário jean.teste@teste.com. não está registrado neste site. ')
        cy.get('.woocommerce-error').should('exist')
           
    })

it.only('Deve exibir mensagem de erro de senha', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       cy.get('#username').type('jean.teste@teste.com.')
       cy.get('#password').type('Jlb@1988')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'O usuário jean.teste@teste.com. não está registrado neste site. ')

});


})