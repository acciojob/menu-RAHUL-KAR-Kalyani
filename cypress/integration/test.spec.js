// cypress/integration/dishList.spec.js

describe('DishList Component', () => {
    beforeEach(() => {
      cy.visit('/'); // Adjust if your app is hosted at a different URL
    });
  
    it('should render DishList correctly', () => {
      cy.get('.dish-list').should('exist'); // Check if DishList is rendered
    });
  
    it('should display items belonging to category Shakes', () => {
      cy.get('[data-testid="category-shakes"]').click(); // Simulate category click
      cy.get('.dish-card').each($dishCard => {
        cy.wrap($dishCard).should('contain', 'shake'); // Adjust as per your data
      });
    });
  
    // Add similar tests for other categories
  });
  