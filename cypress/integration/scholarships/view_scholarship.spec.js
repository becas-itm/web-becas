const scholarship = {
  id: 'test-id',
  name:
    'Gerda Henkel Foundation: Special Programme Security, Society and the State',
  description:
    'The research programme addresses scholars of all disciplines in the humanities or social sciences who focus on security-related issues, the fading role of the state and the gradual elimination of borders since the end of the Cold War.',
  deadline: '2020-05-21T05:00:00.000Z',
  fundingType: 'COMPLETE',
  academicLevel: 'UNDERGRADUATE',
  country: {
    name: 'Alemania',
    code: 'DEU',
  },
  language: 'en',
  fillStatus: 'COMPLETE',
  status: 'PENDING',
};

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

  cy.route('/api/publishing/scholarships/**', scholarship).as('getScholarship');
  cy.visit('/admin/convocatorias/test-id');
  cy.wait('@getScholarship');
});

describe('Page header', () => {
  it('should have a title', () => {
    cy.contains('h1', 'Convocatoria');
  });

  it('should have a go back button', () => {
    cy.findByTestId('goBack');
  });
});

describe('Basic info section', () => {
  it('should have a title', () => {
    cy.contains('Datos básicos');
  });

  it('should have a description', () => {
    cy.contains('Información básica acerca de la convocatoria.');
  });

  it('should have name field', () => {
    cy.contains('label', 'Nombre');
    cy.findByTestId('scholarshipName').should('have.value', scholarship.name);
  });

  it('should have description field', () => {
    cy.contains('label', 'Descripción');
    cy.findByTestId('description').should(
      'have.value',
      scholarship.description,
    );
  });

  it('should have deadline field', () => {
    cy.contains('label', 'Abierta hasta');
    cy.get('.testDeadline input').should(
      'have.value',
      scholarship.deadline.substring(0, 10),
    );
  });

  it('should have an academic level field', () => {
    cy.contains('label', 'Tipo de beca');
    cy.findByTestId('academicLevel').should(
      'have.attr',
      'data-value',
      scholarship.academicLevel,
    );
  });

  it('should have a funding type field', () => {
    cy.contains('label', 'Financiamiento');
    cy.findByTestId('fundingType').should(
      'have.attr',
      'data-value',
      scholarship.fundingType,
    );
  });
});

describe('Localization section', () => {
  it('should have a title', () => {
    cy.contains('Localización');
  });

  it('should have a description', () => {
    cy.contains(
      'Información acerca de la localidad de la convocatoria y el idioma en que se realizará.',
    );
  });

  it('should have a funding type field', () => {
    cy.contains('label', 'País');
    cy.findByTestId('country').should('have.value', scholarship.country.name);
  });

  it('should have a language field', () => {
    cy.contains('label', 'Idioma');
    cy.findByTestId('language').should(
      'have.attr',
      'data-value',
      scholarship.language,
    );
  });
});
