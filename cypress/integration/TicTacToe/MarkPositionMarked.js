import * as positions from '../common/positions';

Given('que a posição {string} já está marcada com X', (position) => {
    cy.visitWebSite(); // Visitar o site para teste
    cy.markPosition(positions[position]);
})

When('tento marcar a posição {string}', (position) => {
    cy.markPosition(positions[position]);
})

Then('o espaço {string} não deve ser alterado e continuar sendo {string}', (position, player) => {
    cy.checkPosition(positions[position], player);
})
