# Cypress Web Automation
> **Eesha Noor** | SDET | JavaScript + Cypress

## Tech Stack
- JavaScript (ES6+)
- Cypress 13.x
- Page Object Model
- Mochawesome Reports

## Test Coverage (SauceDemo)
- Login: valid/invalid/locked/empty
- Inventory: product count, sorting, add to cart
- Cart: item management
- Checkout: full E2E flow

## Run Tests
```bash
npm install
npx cypress open          # interactive mode
npx cypress run           # headless
npx cypress run --browser firefox
npx cypress run --spec "cypress/e2e/login.cy.js"
```

## Project Structure
```
cypress/
├── e2e/        login.cy.js, inventory.cy.js, checkout.cy.js
├── pages/      LoginPage.js, InventoryPage.js, CartPage.js
├── fixtures/   users.json
└── support/    commands.js, e2e.js
```