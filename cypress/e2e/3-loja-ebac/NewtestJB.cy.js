// <reference types="cypress" />

describe ('Funcionalidade: Google', () =>{

    it('Deve acessar o site do Google', () =>{   
cy.visit('https://www.google.com.br/')
cy.get('#APjFqb').clear().type('counter strike 1.6')
//cy.get('.FPdoLc > center > .gNO89b').click()   //pq n/ funciona?
})


})