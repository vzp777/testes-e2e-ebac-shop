/// <reference types="cypress" />

var faker = require('faker');



context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {


    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

})

describe('Deve fazer login com sucesso', () => {


    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Aluno')

        })
    });

    it('Deve adicionar produtos ao carrinho - Usando comando customizado ', () => {
        cy.visit('produtos')
        cy.addProdutos('Abominable Hoodie', 4)
    });


    it('Fazendo cadastro Chekcout.', () => {
        cy.visit('checkout')
        let emailFaker2 = faker.internet.email()
        cy.cadastro('Victor', 'Penna', 'Ebac', 'Brasil', 'Av Paulista', '111', 'São Paulo', 'São Paulo', '02338001', '999999999', emailFaker2)
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

    });


});