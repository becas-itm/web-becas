describe('landing page', () => {
  beforeEach(() => cy.visit('/'));

  it('test hero section', () => {
    cy.contains('Encuentra nuevas oportunidades en el exterior');
    cy.contains('¿Conoces alguna beca?');
    cy.contains('¡Compártela!').should('have.attr', 'href', '/');
  });

  it('search bar should redirect to search page', () => {
    cy.findByTestId('SearchBar').get('input').type('test{enter}');
    cy.location('search').should('contain', 'term=test');
  });
});
