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




Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});



Cypress.Commands.add('cadastro', (nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep, telefone, email) => {

    cy.get('#billing_first_name').clear().type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#billing_company').clear().type(empresa)
    cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
    cy.get('#billing_address_1').clear().type(endereco)
    cy.get('#billing_address_2').clear().type(numero)
    cy.get('#billing_city').clear().type(cidade)
    cy.get('#select2-billing_state-container').click().type(estado, '{enter}').click()
    cy.get('#billing_postcode').clear().type(cep)
    cy.get('#billing_phone').clear().type(telefone)
    cy.get('#billing_email').clear().type(email)
    cy.get('#terms').click()
    cy.get('#place_order').click()


});

Cypress.Commands.add('addProdutos', (produto, quantidade) => {
    cy.get('[class="product-block grid"]')
    .contains(produto).click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
  


})