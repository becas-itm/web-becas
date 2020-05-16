const submitUpdate = () => cy.findByTestId('update').click();

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

describe('Edit complete scholarship', () => {
  const scholarship = {
    id: 'test-id',
    name: 'foo',
    description: 'bar',
    deadline: '2020-05-21T05:00:00.000Z',
    fundingType: 'COMPLETE',
    academicLevel: 'UNDERGRADUATE',
    language: 'en',
    state: 'PENDING',
    fillStatus: 'COMPLETE',
    country: {
      code: 'DEU',
      name: 'Alemania',
    },
  };

  beforeEach(() => {
    cy.server();

    cy.route('/api/publishing/scholarships/**', scholarship).as(
      'getScholarship',
    );

    cy.visit('/admin/convocatorias/test-id');
    cy.wait('@getScholarship');

    cy.route('PUT', '/api/publishing/scholarships/*/', {
      statusCode: 204,
    }).as('editRequest');
  });

  it('should have an "Update" button', () => {
    cy.findByTestId('update').click();
    cy.wait('@editRequest');
  });

  it('should show a confirmation message', () => {
    cy.findByTestId('update').click();
    cy.wait('@editRequest');
    cy.contains('Convocatoria actualizada.');
  });

  it('should refetch scholarship', () => {
    cy.findByTestId('update').click();
    cy.wait(['@editRequest', '@getScholarship']);
  });
});

describe('Edit scholarship', () => {
  const scholarship = {
    id: 'test-id',
    name: 'foo',
    description: 'bar',
    deadline: '2020-05-21T05:00:00.000Z',
    fundingType: 'COMPLETE',
    academicLevel: 'UNDERGRADUATE',
    language: 'en',
    state: 'PENDING',
    fillStatus: 'COMPLETE',
    country: {
      code: 'DEU',
      name: 'Alemania',
    },
  };

  beforeEach(() => {
    cy.server();

    cy.route('/api/publishing/scholarships/**', scholarship).as(
      'getScholarship',
    );

    cy.visit('/admin/convocatorias/test-id');
    cy.wait('@getScholarship');

    cy.route('PUT', '/api/publishing/scholarships/*/', { statusCode: 204 }).as(
      'editRequest',
    );
  });

  it('name should be editable', () => {
    const field = { name: 'name', value: 'edited name' };
    cy.findByTestId('scholarshipName').clear().type(field.value);
    submitUpdate();
    cy.wait('@editRequest')
      .its('request.body')
      .should('have.nested.property', field.name)
      .and('be.equal', field.value);
  });

  it('description should be editable', () => {
    const field = { name: 'description', value: 'edited description' };
    cy.findByTestId('description').clear().type(field.value);
    submitUpdate();
    cy.wait('@editRequest')
      .its('request.body')
      .should('have.nested.property', field.name)
      .and('be.equal', field.value);
  });

  it('should send only the country code', () => {
    submitUpdate();
    cy.wait('@editRequest')
      .its('request.body')
      .should('have.nested.property', 'country')
      .and('be.equal', scholarship.country.code);
  });
});

describe('Empty scholarship', () => {
  const scholarship = {
    id: 'test-id',
    name: null,
    description: null,
    deadline: null,
    fundingType: null,
    academicLevel: null,
    language: null,
    state: 'PENDING',
    fillStatus: 'INCOMPLETE',
    country: null,
  };

  beforeEach(() => {
    cy.server();

    cy.route('/api/publishing/scholarships/**', scholarship).as(
      'getScholarship',
    );

    cy.visit('/admin/convocatorias/test-id');
    cy.wait('@getScholarship');

    cy.route('PUT', '/api/publishing/scholarships/*/', { statusCode: 204 }).as(
      'editRequest',
    );
  });

  it('name should be editable', () => {
    const field = { name: 'name', value: 'edited name' };
    cy.findByTestId('scholarshipName').clear().type(field.value);
    submitUpdate();
    cy.wait('@editRequest')
      .its('request.body')
      .should('have.nested.property', field.name)
      .and('be.equal', field.value);
  });

  it('description should be editable', () => {
    const field = { name: 'description', value: 'edited description' };
    cy.findByTestId('description').clear().type(field.value);
    submitUpdate();
    cy.wait('@editRequest')
      .its('request.body')
      .should('have.nested.property', field.name)
      .and('be.equal', field.value);
  });
});
