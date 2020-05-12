const scholarship = {
  id: 'test-id',
  name:
    'Gerda Henkel Foundation: Special Programme Security, Society and the State',
  description:
    'The research programme addresses scholars of all disciplines in the humanities or social sciences who focus on security-related issues, the fading role of the state and the gradual elimination of borders since the end of the Cold War.',
  deadline: '2020-05-21T05:00:00.000Z',
  fundingType: 'COMPLETE',
  academicLevel: 'UNDERGRADUATE',
  language: 'en',
  status: 'PENDING',
  fillStatus: 'COMPLETE',
  country: {
    code: 'DEU',
    name: 'Alemania',
  },
};

const stubScholarship = (fields = {}) => {
  cy.server();

  // TODO: How can we simplify the auth process
  cy.route('POST', '/api/auth/refresh-token/', {
    displayName: 'John Doe',
    email: 'john@doe.com',
    token: '123',
    expiresIn: 999999,
    gender: 'male',
  });

  const response = { ...scholarship, ...fields };
  cy.route('/api/publishing/scholarships/**', response).as('getScholarship');
  cy.visit(`/admin/convocatorias/${response.id}`);

  cy.wait('@getScholarship');

  cy.route('POST', '/api/publishing/scholarships/*/deny/', {
    statusCode: 204,
  }).as('denial');
};

describe('Deny modal', () => {
  before(() => {
    stubScholarship();
    cy.findByTestId('deny').click();
  });

  it('should open modal deny button click', () => {
    cy.get('#deny-scholarship');
  });

  it('should close modal on cancel button click', () => {
    cy.findByText('Cancelar').click();
    cy.get('#deny-scholarship').should('not.exist');
  });
});

describe('Complete scholarship', () => {
  it('should deny complete scholarship', () => {
    stubScholarship({ fillStatus: 'INCOMPLETE' });
    cy.findByTestId('deny').click();

    cy.findByPlaceholderText('Indica una razón').type('test reason');
    cy.findByTestId('confirmDeny').click();
    cy.wait('@denial');
  });
});

describe('Incomplete scholarship', () => {
  it('should deny incomplete scholarship', () => {
    stubScholarship({ fillStatus: 'INCOMPLETE' });
    cy.findByTestId('deny').click();

    cy.findByPlaceholderText('Indica una razón').type('test reason');
    cy.findByTestId('confirmDeny').click();
    cy.wait('@denial');
  });
});
