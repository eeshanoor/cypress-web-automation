class InventoryPage {
  get inventoryContainer() { return cy.get('#inventory_container'); }
  get inventoryItems()     { return cy.get('.inventory_item'); }
  get sortDropdown()       { return cy.get('.product_sort_container'); }
  get cartBadge()          { return cy.get('.shopping_cart_badge'); }
  get addToCartButtons()   { return cy.get('[data-test^="add-to-cart"]'); }

  isLoaded() {
    this.inventoryContainer.should('be.visible');
  }

  getItemCount() {
    return this.inventoryItems.its('length');
  }

  sortBy(option) {
    this.sortDropdown.select(option);
  }

  addItemToCartByIndex(index) {
    this.addToCartButtons.eq(index).click();
  }

  verifyCartBadge(count) {
    this.cartBadge.should('have.text', String(count));
  }
}

export default new InventoryPage();