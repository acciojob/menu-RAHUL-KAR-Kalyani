describe('DishList Component', () => {
    beforeEach(() => {
      cy.visit('/'); // This should be the root of your app or adjust as necessary
    });
  
    it('should render DishList correctly', () => {
      cy.get('.dish-list').should('exist'); // Check if DishList is rendered
    });
  });
  