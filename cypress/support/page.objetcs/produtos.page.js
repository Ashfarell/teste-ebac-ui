class ProdutosPage {

visitarUrl() {
    cy.visit('produtos')
}

 buscarProduto(nomeProduto) {
cy.get('[name="s"]').eq(1).type(nomeProduto)    //feito dessa forma porque n/ Cypress n/ é encontrado o campo de busca - foi necessário inspecionar a página
cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
//cy.get('.button-search').eq(1).click()          //forma simplificada quando há mais de um elemento com a mesma classe (inspecionando página)
    }

 buscarProdutoLista(nomeProduto) {
cy.get('.products > .row ')
.contains(nomeProduto)
.click()
 }

 visitarProduto(nomeProduto) {  
    //cy.visit(`produto/${nomeProduto}`)                                   //INTERPOLAÇÃO ==>concatenar a url base + o caminho do produto
    const urlFormatada = nomeProduto.replace(/ /g, '-')                    //usando REGEX p/ substituir ' ' por '-'  
    cy.visit(`produto/${urlFormatada}`)                                   
 }

 addProdutoCarrinho() {                                                    //versão sem parâmetro  ==>necessário alterar aqui
   cy.get('.button-variable-item-S').click()
   cy.get('.button-variable-item-Gray').click()
   cy.get('.input-text').clear().type('2')                                //clear p/ limpar o campo antes de digitar
   cy.get('.single_add_to_cart_button').click()
 }

 addProdutoCarrinhoX(tamanho, cor, qtd) {                          //versão com parâmetro   ==>p/ ser mais dinâmica
   cy.get('.button-variable-item-'+tamanho).click()
   //cy.get('.button-variable-item-'+cor).click()                         //forma tradicional
   cy.get(`.button-variable-item-${cor}`).click()                         //forma usando INTERPOLAÇÃO
   cy.get('.input-text').clear().type(qtd)                         //clear p/ limpar o campo antes de digitar
   cy.get('.single_add_to_cart_button').click()
 }

 fazerLogin(usuario, senha) {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
 }

 limparcarrinho() {
  cy.get('.dropdown-toggle > .mini-cart-items').click()
  cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
  cy.get('.remove > .fa').click()
 }

}
export default new ProdutosPage();     //precisa export ar a classe para usar em outros arquivos/ nos arquivos de teste precisa importar