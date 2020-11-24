import * as elements from './elements';

Cypress.Commands.add('visitWebSite', () => {
    cy.visit(elements.baseUrl);
});

Cypress.Commands.add('markPosition', (position) => {
    cy.get(elements.boardGame)
        .find(elements.boardRow).eq(position.line)
        .find(elements.buttonBoard).eq(position.column)
        .click();
})

Cypress.Commands.add('checkPosition', (position, player) => {
    cy.get(elements.boardGame)
        .find(elements.boardRow).eq(position.line)
        .find(elements.buttonBoard).eq(position.column)
        .should('contain', player);
})

Cypress.Commands.add('checkNotPosition', (position, player) => {
    cy.get(elements.boardGame)
        .find(elements.boardRow).eq(position.line)
        .find(elements.buttonBoard).eq(position.column)
        .should('not.contain', player);
})

Cypress.Commands.add('checkNextPlayer', (player) => {
    cy.get(elements.statusPlayer)
        .contains(`Next player: ${player}`);
})

Cypress.Commands.add('undoMark', () => {
    cy.get(elements.undo).click();
})

Cypress.Commands.add('redoMark', () => {
    cy.get(elements.redo).click();
})

Cypress.Commands.add('checkWinner', (player) => {
    cy.get(elements.statusPlayer)
        .contains(`Winner: ${player}`);
})

Cypress.Commands.add('newGame', () => {
    cy.get(elements.newGame).click();
})

Cypress.Commands.add('checkBackgroundColor', (color) => {
    cy.get(elements.backgroundGame)
        .should('have.css', 'background-color', color)
})