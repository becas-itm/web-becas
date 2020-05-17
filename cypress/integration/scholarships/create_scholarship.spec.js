const submitForm = () => cy.findByTestId('create').click();

beforeEach(() => {
  cy.server();

  // TODO: How can we simplify the auth process
  cy.route('POST', '/api/auth/refresh-token/', {
    displayName: 'John Doe',
    email: 'john@doe.com',
    token: '123',
    expiresIn: 999999,
    gender: 'male',
  });
});

describe('Create scholarship', () => {
  const fillScholarship = () => {
    const scholarship = {
      name: 'test name',
      description: 'test description',
      deadline: '9999-01-01',
      academicLevel: 'UNDERGRADUATE',
      fundingType: 'COMPLETE',
      language: 'en',
      country: 'COL',
    };

    cy.findByTestId('scholarshipName').type(scholarship.name);

    cy.findByTestId('description').type(scholarship.description);

    cy.get('.testDeadline input').type(scholarship.deadline, { force: true });

    cy.findByTestId('academicLevel')
      .click()
      .get(`[data-value="${scholarship.academicLevel}"]`)
      .click();

    cy.findByTestId('fundingType')
      .click()
      .get(`[data-value="${scholarship.fundingType}"]`)
      .click();

    cy.findByTestId('country')
      .type('colombi')
      .get('[aria-owns]', { withinSubject: null })
      .then($combo => {
        const menuId = $combo.attr('aria-owns');
        return cy.get(`#${menuId}`);
      })
      .contains('Colombia')
      .click();

    cy.findByTestId('language')
      .click()
      .get(`[data-value="${scholarship.language}"]`)
      .click();

    return { scholarship };
  };

  beforeEach(() => {
    cy.server();

    cy.visit('/admin/convocatorias/crear');

    cy.route('POST', '/api/publishing/scholarships/', { id: 'test-id' }).as(
      'createRequest',
    );
  });

  it('page should have a title', () => {
    cy.contains('Nueva convocatoria');
  });

  it('should have a create button', () => {
    cy.contains('Guardar').should('have.attr', 'data-testid', 'create');
  });

  it('should create a scholarship', () => {
    const { scholarship } = fillScholarship();
    submitForm();
    cy.wait('@createRequest')
      .its('request.body')
      .should('to.include', scholarship);
  });

  it('should validate form', () => {
    const validationMessage = 'Completa todos los campos antes de continuar';
    cy.contains(validationMessage).should('not.exist');
    submitForm();
    cy.contains(validationMessage);
  });

  it('should show a confirmation message', () => {
    fillScholarship();
    submitForm();
    cy.wait('@createRequest');
    cy.contains('Convocatoria creada.');
  });

  it('should disable submit button if form is incomplete', () => {
    submitForm().should('be.disabled');
  });

  it('should navigate to scholarship detail after creation', () => {
    fillScholarship();
    submitForm();
    cy.wait('@createRequest');
    cy.location('pathname').should('equal', '/admin/convocatorias/test-id');
  });
});
