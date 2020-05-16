const scholarship = {
  id: 'test-id',
  name: 'foo',
  description: 'bar',
  deadline: '2020-05-21T05:00:00.000Z',
  fundingType: 'COMPLETE',
  academicLevel: 'UNDERGRADUATE',
  language: 'en',
  state: 'PUBLISHED',
  fillStatus: 'COMPLETE',
  approval: { approvedAt: '2020-05-20T05:00:00.000Z' },
  country: {
    code: 'DEU',
    name: 'Alemania',
  },
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

  cy.route('POST', '/api/publishing/scholarships/*/archive/', {
    statusCode: 204,
  }).as('archiveRequest');
});

describe('Archived Scholarship', () => {
  it('should send request on click', () => {
    cy.findByTestId('archive').click();
    cy.wait('@archiveRequest');
  });

  it('should show a confirmation message', () => {
    cy.findByTestId('archive').click();
    cy.wait('@archiveRequest');
    cy.contains('Convocatoria archivada.');
  });

  it('should refetch scholarship', () => {
    cy.findByTestId('archive').click();
    cy.wait(['@archiveRequest', '@getScholarship']);
  });
});
