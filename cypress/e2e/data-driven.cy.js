import loginPage from '../pages/LoginPage';

const invalidUsers = [
  { username: 'locked_out_user', password: 'secret_sauce',  error: 'locked out' },
  { username: 'invalid_user',    password: 'wrong_pass',    error: 'Username and password do not match' },
  { username: '',                password: 'secret_sauce',  error: 'Username is required' },
  { username: 'standard_user',   password: '',              error: 'Password is required' },
];

describe('Data-Driven Login Tests', () => {
  invalidUsers.forEach(({ username, password, error }) => {
    it(`shows error for "${username || 'empty username'}"`, () => {
      loginPage.navigate();
      loginPage.login(username, password);
      loginPage.verifyErrorContains(error);
    });
  });
});

const sortTests = [
  { option: 'Price (low to high)', expectedPrice: '$7.99' },
  { option: 'Price (high to low)', expectedPrice: '$49.99' },
];

describe('Data-Driven Sort Tests', () => {
  beforeEach(() => { cy.loginAsStandardUser(); });

  sortTests.forEach(({ option, expectedPrice }) => {
    it(`sorts by "${option}" correctly`, () => {
      cy.get('.product_sort_container').select(option);
      cy.get('.inventory_item_price').first().should('contain', expectedPrice);
    });
  });
});