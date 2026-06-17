import loginPage from '../pages/LoginPage';
import inventoryPage from '../pages/InventoryPage';

describe('Inventory Tests', () => {
  beforeEach(() => {
    loginPage.navigate();
    loginPage.login('standard_user', 'secret_sauce');
    inventoryPage.isLoaded();
  });

  it('displays 6 products on inventory page', () => {
    inventoryPage.getItemCount().should('eq', 6);
  });

  it('adds item to cart and updates badge', () => {
    inventoryPage.addItemToCartByIndex(0);
    inventoryPage.verifyCartBadge(1);
  });

  it('adds two items and shows correct badge count', () => {
    inventoryPage.addItemToCartByIndex(0);
    inventoryPage.addItemToCartByIndex(1);
    inventoryPage.verifyCartBadge(2);
  });

  it('sorts products by price low to high', () => {
    inventoryPage.sortBy('Price (low to high)');
    cy.get('.inventory_item_price').first().should('contain', '$7.99');
  });
});