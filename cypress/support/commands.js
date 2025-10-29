// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })  
    Cypress.Commands.add('login', (usuario, senha) => {  // Método login recebe usuário + senha
        cy.get('#username').type(usuario)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()
        })

        Cypress.Commands.add('preCadastroSimples', (email, senha) => {
            cy.get('#reg_email').type(email)
            cy.get('#reg_password').type(senha)
            cy.get(':nth-child(4) > .button').click()
        })

    Cypress.Commands.add('preCadastro', (email, senha, nome, sobrenome) => {  
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        })

    Cypress.Commands.add('completarCadastro', (nome, sobrenome) => {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
    })

    Cypress.Commands.add('loginLogout', (usuario, senha) => {  
        cy.get('#username').type(usuario)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()   //comando p/ clicar em logout
            })

    Cypress.Commands.add('logout', () => {                                                   //esse comando n/ recebe parâmetro, apenas clica no botão logout
    cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()
    })

    Cypress.Commands.add('clickpedidos', (botao) => {                                        //esse comando n/ recebe parâmetro, apenas clica no botão pedidos
    cy.get('.woocommerce-MyAccount-navigation-link--orders > a').click()
    })

    Cypress.Commands.add('visitarSite', (site) => {  
        cy.visit(site) // forma com baseUrl no cypress.config.js
    })

    

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })