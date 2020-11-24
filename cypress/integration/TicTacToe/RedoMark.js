import * as positions from '../common/positions';

Given('que a posição {string} foi marcado e desfeita a ação', (position) => {
    cy.visitWebSite(); // Visitar o site para teste
    cy.markPosition(positions[position]); // Marcar na posição indicada
    cy.undoMark(); // Desfazer a marcação
})

When('tento refazer a ação', () => {
    cy.redoMark(); // Refazer
})

Then('a posição {string} deve permanecer marcada com {string}', (position, player) => {
    cy.checkPosition(positions[position], player); // Verificar se existe o valor marcado na posição
})
