// cypress/integration/tests/test.spec.js

describe('DishList Component', () => {
    beforeEach(() => {
      cy.visit('/'); // Navigate to the base URL
    });
  
    it('should render DishList correctly', () => {
      cy.get('#main').should('exist'); // Check if the main container exists
    });
  
    it('All displayed items should belong to category Shakes', () => {
      cy.get('#filter-btn-3').click(); // Click the button for the "Shakes" category
      cy.get('.dish-card').each($dishCard => {
        cy.wrap($dishCard).should('contain.text', 'shake'); // Adjust as per your data
      });
    });
  
    it('All displayed items should belong to category Lunch', () => {
      cy.get('#filter-btn-2').click(); // Click the button for the "Lunch" category
      cy.get('.dish-card').each($dishCard => {
        cy.wrap($dishCard).should('contain.text', 'lunch'); // Adjust as per your data
      });
    });
  
    it('All displayed items should belong to category Breakfast', () => {
      cy.get('#filter-btn-1').click(); // Click the button for the "Breakfast" category
      cy.get('.dish-card').each($dishCard => {
        cy.wrap($dishCard).should('contain.text', 'breakfast'); // Adjust as per your data
      });
    });
  });
  