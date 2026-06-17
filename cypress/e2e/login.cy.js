import loginPage from '../pages/LoginPage';
import inventoryPage from '../pages/InventoryPage';

describe('Login Tests - SauceDemo', () => {
  beforeEach(() => {
    loginPage.navigate();
  });

  it('valid credentials navigate to inventory', () => {
    loginPage.login('standard_user', 'secret_sauce');
    inventoryPage.isLoaded();
    cy.url().should('include', '/inventory.html');
  });

  it('invalid credentials show error message', () => {
    loginPage.login('wrong_user', 'wrong_pass');
    loginPage.verifyErrorContains('Username and password do not match');
  });

  it('locked out user sees lock error', () => {
    loginPage.login('locked_out_user', 'secret_sauce');
    loginPage.verifyErrorContains('locked out');
  });

  it('empty username shows validation error', () => {
    loginPage.login('', 'secret_sauce');
    loginPage.verifyErrorContains('Username is required');
  });

  it('empty password shows validation error', () => {
    loginPage.login('standard_user', '');
    loginPage.verifyErrorContains('Password is required');
  });
});