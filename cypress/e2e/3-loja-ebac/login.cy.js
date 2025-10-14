/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {
  
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       cy.get('#username').type('jean.teste@teste.com.br')
       cy.get('#password').type('Jlb@1988')
         cy.get('.woocommerce-form > .button').click()


         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jean.teste (não é jean.teste? Sair)')
    })
})