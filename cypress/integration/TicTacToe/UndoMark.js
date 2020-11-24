import * as positions from '../common/positions';

Given('que a posição {string} foi marcada', (position) => {
    cy.visitWebSite(); // Visitar o site para teste
    cy.markPosition(positions[position]); // Marcar na posição indicada
})

When('tento desfazer essa ação', () => {
    cy.undoMark(); // Desfazer a marcação
})

Then('a posição {string} deve ser desmarcada e ficar vazia', (position) => {
    cy.checkNotPosition(positions[position], 'X'); // Verificar se não existe nada marcado na posição
})
