describe('Admin Home', () => {
  const user = {
    firstName: 'John',
    fullName: 'John Doe',
  };

  beforeEach(() => {
    cy.server();

    // TODO: How can we simplify the auth process
    cy.route('POST', '/api/auth/refresh-token/', {
      displayName: user.fullName,
      email: 'john@doe.com',
      token: '123',
      expiresIn: 999999,
      gender: 'male',
    });

    cy.visit('/admin/');
  });

  it('should have a logo', () => {
    cy.findByTitle('Logo ITM');
  });

  it('should render user actions', () => {
    cy.findByTestId('UserActions').contains(user.fullName);
  });

  it('should have a welcome message', () => {
    cy.findByTestId('WelcomeMessage').contains(user.firstName);
  });

  describe('navigation items', () => {
    it('should have a scholarship item', () => {
      cy.contains('Convocatorias').should(
        'have.attr',
        'href',
        '/admin/pendientes',
      );
      cy.contains('Crear, aprobar y rechazar nuevas convocatorias');
    });

    it('should have an users item', () => {
      cy.contains('Usuarios').should('have.attr', 'href', '/admin/usuarios');
      cy.contains('Ver e invitar a otros administradores');
    });

    it('should have an entity item', () => {
      cy.contains('Entidades').should('have.attr', 'href', '/admin/entidades');
      cy.contains(
        'Agregar y editar entidades que ofertan becas y convocatorias',
      );
    });
  });
});
