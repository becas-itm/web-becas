const scholarship = {
  id: 'test-id',
  name: 'foo',
  description: 'bar',
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

const stubApproval = () => {
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

  cy.route('POST', '/api/publishing/scholarships/*/approve/', {
    statusCode: 204,
  }).as('approval');
};

describe('Complete scholarship', () => {
  it('should send request on click', () => {
    stubApproval();
    cy.findByTestId('approve').click();
    cy.wait('@approval');
  });
});
