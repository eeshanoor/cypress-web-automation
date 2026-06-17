Cypress.Commands.add('login', (username, password) => {
  cy.visit('/');
  cy.get('[data-test="username"]').clear().type(username);
  cy.get('[data-test="password"]').clear().type(password);
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('loginAsStandardUser', () => {
  cy.fixture('users').then(users => {
    cy.login(users.standardUser.username, users.standardUser.password);
  });
});