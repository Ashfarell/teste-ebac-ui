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

it.only('Deve fazer login, colocar produto no carrinho, e limpar o carrinho', () => {
    produtosPage.fazerLogin('jl9891@hotmail.com', 'Jlb@1988')   // usando método da page object produtos.page.js
    cy.get('#primary-menu > .menu-item-629 > a').click()
    produtosPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
    let qtd = 2                                                             //variável p/ quantidade
    produtosPage.addProdutoCarrinhoX('L', 'Red', qtd)                    //forma com variável
    cy.get('.woocommerce-message').should('contain', qtd + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')       //forma com variável
    //cy.get('.dropdown-toggle > .mini-cart-items').click()
    //cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
    //cy.get('.cart_item > .product-remove').find('.remove').click()
    //cy.get('.cart-empty').should('contain', 'Seu carrinho está vazio.')
    
    produtosPage.limparcarrinho()
    cy.get('.woocommerce-message').should('exist')
    cy.get('.cart-empty').should('contain', 'Seu carrinho está vazio.')
})



})