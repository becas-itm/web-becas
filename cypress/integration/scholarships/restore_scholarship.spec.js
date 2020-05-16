describe('Restore Scholarship', () => {
  const scholarship = {
    id: 'test-id',
    name: 'foo',
    description: 'bar',
    deadline: '2020-05-21T05:00:00.000Z',
    fundingType: 'COMPLETE',
    academicLevel: 'UNDERGRADUATE',
    language: 'en',
    fillStatus: 'COMPLETE',
    country: {
      code: 'DEU',
      name: 'Alemania',
    },
    entity: {
      name: 'daad',
      fullName: 'Servicio Alemán de Intercambio Académico',
    },
    state: 'ARCHIVED',
    denial: {
      deniedAt: '2020-05-21T05:00:00.000Z',
      reason: 'Convocatoria duplicada/archivada',
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

    cy.route('/api/publishing/scholarships/**', scholarship).as(
      'getScholarship',
    );

    cy.visit('/admin/convocatorias/test-id');
    cy.wait('@getScholarship');

    cy.route('POST', '/api/publishing/scholarships/*/restore/', {
      statusCode: 204,
    }).as('restoreRequest');
  });

  it('all fields should be disabled', () => {
    cy.findByTestId('scholarshipName').should('be.disabled');
    cy.findByTestId('description').should('be.disabled');
    cy.get('.testDeadline input').should('be.disabled');

    cy.findByTestId('academicLevel')
      .children('[role="button"]')
      .should('have.attr', 'aria-disabled', 'true');

    cy.findByTestId('fundingType')
      .children('[role="button"]')
      .should('have.attr', 'aria-disabled', 'true');

    cy.findByTestId('language')
      .children('[role="button"]')
      .should('have.attr', 'aria-disabled', 'true');

    cy.findByTestId('country').should('be.disabled');
  });

  describe('restore banner', () => {
    it('should be visible', () => {
      cy.get('.restoreBanner').contains('Beca archivada');
    });

    it('should restore scholarship on button click', () => {
      cy.findByTestId('restoreBannerButton').click();
      cy.wait(['@restoreRequest', '@getScholarship']);
    });
  });

  it('should send request on restore button click', () => {
    cy.findByTestId('restore').click();
    cy.wait('@restoreRequest');
  });

  it('should show a confirmation message', () => {
    cy.findByTestId('restore').click();
    cy.wait('@restoreRequest');
    cy.contains('Convocatoria restaurada.');
  });

  it('should refetch scholarship', () => {
    cy.findByTestId('restore').click();
    cy.wait(['@restoreRequest', '@getScholarship']);
  });
});
