// <reference types="cypress" />
import produtosPage from "../../support/page.objetcs/produtos.page";
describe('Funcionalidade: teste', () => {

beforeEach(() => {
//cy.visit('minha-conta')                                                   // forma com baseUrl no cypress.config.js
//cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/ ')               // forma inicial
//cy.visitarSite('http://lojaebac.ebaconline.art.br/minha-conta/')          // forma com comando customizado criado em commands.js
cy.visitarSite('minha-conta')                                             // forma com comando customizado criado em commands.js  + Site em cypress.config.js
//produtosPage.visitarUrl()                                                   // forma com comando customizado criado em page.objects/produtos.page.js
});

it('Deve fazer login com sucesso e depois logout', () => {
    cy.get('#username').type('jean.teste@teste.com.br')
    cy.get('#password').type('Jlb@1988')
    cy.get('.woocommerce-form > .button').click()
    cy.logout()   // comando customizado criado em commands.js
});

it('Deve fazer login e clicar em pedidos', () => {
cy.get('#username').type('jean.teste@teste.com.br')
    cy.get('#password').type('Jlb@1988')
    cy.get('.woocommerce-form > .button').click()
    cy.clickpedidos()
    cy.get('.woocommerce-message').should('exist')
});


})

