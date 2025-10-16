// <reference types="cypress" />

describe('Funcionalidade: Produtos', () => {

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
});

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
     //.first()  // busca o primeiro na fila
     //.last()   // busca o último na fila
    //.eq(2)   // busca 3º na fila
    .contains('Abominable Hoodie')  // busca o nome exato
   .click()

cy.get('.quantity').should('exist')
cy.get('#tab-description > :nth-child(1)').should('exist')
cy.get('#tab-description > :nth-child(1)').should('contain' , 'It took')


    });
})