import * as positions from '../common/positions';

Given('que a posição {string}, {string}, {string} e {string} estão marcadas', (p1, p2, p3, p4) => {
    cy.visitWebSite(); // Visitar o site para teste
    cy.markPosition(positions[p1]); // Marcar na posição indicada
    cy.markPosition(positions[p2]); // Marcar na posição indicada
    cy.markPosition(positions[p4]); // Marcar na posição indicada
    cy.markPosition(positions[p3]); // Marcar na posição indicada
})

When('marco a posição {string}', (position) => {
    cy.markPosition(positions[position]); // Marcar na posição indicada
})

Then('o jogador {string} deve sair como vitorioso', (player) => {
    cy.checkWinner(player);
    cy.screenshot();
})
