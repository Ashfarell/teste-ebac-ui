// <reference types="cypress" />
import produtosPage from "../../support/page.objetcs/produtos.page";

describe('Funcionalidade: Produtos', () => {

beforeEach(() => {
    //cy.visit('http://lojaebac.ebaconline.art.br/produtos/')   forma inicial
    //cy.visit('produtos')   //                                 forma com baseUrl no cypress.config.js
    produtosPage.visitarUrl()
});

    it.only('Deve buscar um produto com sucesso', () => {  
        produtosPage.buscarProduto('Atlas Fitness Tank');
        cy.get('.product_title').should('contain', 'Atlas Fitness Tank');
        cy.get('.product_title').should('exist');
    });

    it('Deve selecionar um produto da lista', () => {
      produtosPage.buscarProdutoLista('Ariel Roll Sleeve Sweatshirt');
    });
    
    it('Deve adicionar um produto ao carrinho', () => {
    });
})

