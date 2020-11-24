import * as positions from '../common/positions';

Given('que não exista nenhum elemento marcado no espaço {string}', (position) => {
    cy.visitWebSite(); // Visitar o site para teste
    cy.checkNotPosition(positions[position], 'X'); // Verificar se não existe nada marcado na posição
})

When('tento marcar na posição {string}', (position) => {
    cy.markPosition(positions[position]); // Marcar na posição solicitada
})

Then('o espaço {string} será marcado', (position) => {
    cy.checkPosition(positions[position], 'X'); // Verificar se o X foi marcado na posição solicitada
})

And('próximo jogador é {string}', (player) => {
    cy.checkNextPlayer(player);
})