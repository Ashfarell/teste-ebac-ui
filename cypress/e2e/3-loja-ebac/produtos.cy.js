// <reference types="cypress" />
import { vi } from "@faker-js/faker";
import produtosPage from "../../support/page.objetcs/produtos.page";

describe('Funcionalidade: Produtos', () => {

beforeEach(() => {
    //cy.visit('http://lojaebac.ebaconline.art.br/produtos/')   forma inicial
    //cy.visit('produtos')   //                                 forma com baseUrl no cypress.config.js
    produtosPage.visitarUrl()
});

    it('Deve buscar um produto com sucesso', () => {  
        produtosPage.buscarProduto('Atlas Fitness Tank')
        cy.get('.product_title').should('contain', 'Atlas Fitness Tank')
        cy.get('.product_title').should('exist')
    });

    it('Deve selecionar um produto da lista', () => {
      produtosPage.buscarProdutoLista('Ariel Roll Sleeve Sweatshirt')
    });

    it('Deve visitar a página do produto especifíco', () => {                    
   //produtosPage.visitarProduto('augusta-pullover-jacket');                           //usando "-" na URL p/ n/ dar erro
   produtosPage.visitarProduto('augusta pullover jacket')                            //no PAGE usamos REGEX p/ substituir ' ' por '-'
   cy.get('.product_title').should('exist')
   cy.get('.product_title').should('contain', 'Augusta Pullover Jacket')
    });

    it('Deve adicionar um produto ao carrinho', () => {
        produtosPage.buscarProduto('Josie Yoga Jacket')
        produtosPage.addProdutoCarrinho()
        cy.get('.woocommerce-message').should('contain', '2')
        cy.get('.woocommerce-message').should('exist')
    });

    it('Deve adicionar um produto ao carrinho - Versão dinâmica', () => {
        produtosPage.buscarProduto('Josie Yoga Jacket')
        //produtosPage.addProdutoCarrinhoX('M', 'Black', 2)                    //forma tradicional
        let qtd = 5                                                             //variável p/ quantidade
        produtosPage.addProdutoCarrinhoX('M', 'Black', qtd)                    //forma com variável    
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Josie Yoga Jacket” foram adicionados no seu carrinho.')       //forma com variável
        cy.get('.woocommerce-message').should('contain', qtd)                                                                     //forma com variável
    });

    it.only('Deve adicionar um produto ao carrinho buscando da massa de dados', () =>{                 //usando ARRAY p/ buscar os dados
    cy.fixture('produtos').then(dados=> {
    produtosPage.buscarProduto(dados[2].nomeProduto)
    produtosPage.addProdutoCarrinhoX(dados[2].tamanho, dados[2].cor, dados[2].qtd)
    cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
    })
});

})

