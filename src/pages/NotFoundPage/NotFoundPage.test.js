import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import NotFoundPage from './index';

function renderWithRouter() {
  const history = createMemoryHistory();
  const wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  );
  return {
    ...render(<NotFoundPage />, { wrapper }),
    history,
  };
}

test('page renders correctly', () => {
  const { history } = renderWithRouter();

  expect(screen.queryByText('404')).toBeInTheDocument();
  expect(
    screen.queryByText('No pudimos encontrar la página.'),
  ).toBeInTheDocument();

  userEvent.click(screen.getByText('Regresa al inicio'));
  expect(history.location.pathname).toBe('/');
});
