describe('footer section', () => {
  beforeEach(() => cy.visit('/'));

  it('should have a contact section', () => {
    cy.contains('Calle 73 # 76a - 354 ');
    cy.contains('Medellín, Antioquia');

    const contactEmail = 'dcri@itm.edu.co';
    cy.contains(contactEmail).should(
      'have.attr',
      'href',
      `mailto:dcri@itm.edu.co`,
    );
  });

  it('should have a links section', () => {
    cy.findByTestId('AppFooter');
    cy.get('[href="/"]').contains('Inicio');
    cy.get('[href="/buscar"]').contains('Buscar becas');
    cy.contains('Compartir una beca').should('have.attr', 'href', '/');
    cy.get('[href="/terminos"]').contains('Términos y condiciones');
  });

  it('should have a follow us section', () => {
    cy.get('[href="https://www.facebook.com/itminternacional"]')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'rel', 'noopener noreferrer')
      .contains('Facebook');

    cy.get('[href="https://github.com/becas-itm"]')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'rel', 'noopener noreferrer')
      .contains('GitHub');
  });

  it('should have a copyright section', () => {
    cy.contains('© 2020 ITM');
  });
});
