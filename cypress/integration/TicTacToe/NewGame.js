import * as positions from '../common/positions';

Given('que as posições {string} e {string} estão marcadados', (p1, p2) => {
    cy.visitWebSite(); // Visitar o site para teste
    cy.markPosition(positions[p1]); // Marcar na posição indicada
    cy.markPosition(positions[p2]); // Marcar na posição indicada
})

When('inicio um novo jogo', () => {
    cy.newGame(); // Iniciar novo jogo
})

Then('as posições {string} e {string} devem ficar vazias', (p1, p2) => {
    cy.checkNotPosition(positions[p1], 'X'); // Verificar se não existe nada marcado na posição
    cy.checkNotPosition(positions[p2], 'O'); // Verificar se não existe nada marcado na posição
})
