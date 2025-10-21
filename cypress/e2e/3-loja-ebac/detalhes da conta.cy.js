// <reference types="cypress" />

import { faker } from "@faker-js/faker";

describe('Funcionalidade: Detalhes da conta', () => {

beforeEach(() => {
        cy.visit('minha-conta') // forma com baseUrl no cypress.config.js
        cy.login('jean.teste@teste.com.br', 'Jlb@1988',faker.person.firstName(), faker.person.lastName())   // usando comando customizado criado em commands.js
    });
    
    it('Deve alterar os detalhes da conta', () => {

})

