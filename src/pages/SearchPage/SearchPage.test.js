import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import ScholarshipPreview from './ScholarshipPreview';

const data = {
  id: 'test',
  name: 'test name',
  description: 'test description',
  deadline: '2020-08-06T17:08:12.817Z',
  entity: {
    fullName: 'entity test',
  },
};

describe('Scholarship Preview', () => {
  function renderPreview(props, historyOptions) {
    const history = createMemoryHistory(historyOptions);
    return {
      ...render(<ScholarshipPreview {...props} />, {
        wrapper: ({ children }) => (
          <Router history={history}>{children}</Router>
        ),
      }),
      history,
    };
  }

  it('should render correctly', () => {
    renderPreview(data);
    expect(screen.queryByText(data.name)).toBeInTheDocument();
    expect(screen.queryByText(data.description)).toBeInTheDocument();
    expect(screen.queryByText(data.entity.fullName)).toBeInTheDocument();
    expect(screen.queryByText('6 de agosto de 2020')).toBeInTheDocument();
  });

  it('click on title should go to the scholarship detail', () => {
    const { history } = renderPreview(data);
    userEvent.click(screen.getByText(data.name));
    expect(history.location.pathname).toBe(`/convocatoria/${data.id}`);
  });

  it('click on detail button should go to the scholarship detail', () => {
    const { history } = renderPreview(data);
    userEvent.click(screen.getByText('Detalles'));
    expect(history.location.pathname).toBe(`/convocatoria/${data.id}`);
  });
});
