import loginPage from '../pages/LoginPage';
import inventoryPage from '../pages/InventoryPage';

describe('Checkout E2E Flow', () => {
  beforeEach(() => {
    cy.loginAsStandardUser();
    inventoryPage.isLoaded();
  });

  it('completes full checkout flow', () => {
    inventoryPage.addItemToCartByIndex(0);
    inventoryPage.addItemToCartByIndex(1);
    inventoryPage.verifyCartBadge(2);
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Eesha');
    cy.get('[data-test="lastName"]').type('Noor');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();
    cy.url().should('include', 'checkout-step-two');
    cy.get('.summary_total_label').should('be.visible');
    cy.get('[data-test="finish"]').click();
    cy.url().should('include', 'checkout-complete');
    cy.get('.complete-header').should('contain', 'Thank you');
  });

  it('removes item from cart correctly', () => {
    inventoryPage.addItemToCartByIndex(0);
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test^="remove"]').first().click();
    cy.get('.cart_item').should('not.exist');
  });
});