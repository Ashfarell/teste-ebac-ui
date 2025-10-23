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
    cy.visit(`produto/${nomeProduto}`)                           //INTERPOLAÇÃO ==>concatenar a url base + o caminho do produto
 }

 addProdutoCarrinho() {
    //código a ser escrito
 }

}
export default new ProdutosPage();     //precisa export ar a classe para usar em outros arquivos/ nos arquivos de teste precisa importar