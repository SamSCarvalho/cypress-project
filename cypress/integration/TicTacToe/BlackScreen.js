import * as positions from '../common/positions';

Given('que a posição {string} foi marcada pelo jogador {string}', (position, player) => {
    cy.visitWebSite(); // Visitar o site para teste
    cy.markPosition(positions[position]); // Marcar na posição indicada
    cy.checkPosition(positions[position], player); // Verificar se existe o valor marcado na posição
})

When('o turno é do jogador {string}', (player) => {
    cy.checkNextPlayer(player); // Iniciar novo jogo
})

Then('o fundo de tela deve ficar preto', () => {
    cy.checkBackgroundColor('rgb(0, 0, 0)'); // Verificar cor do background do jogo
})
