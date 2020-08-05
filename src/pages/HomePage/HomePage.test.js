import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { render, screen, getByText } from '@testing-library/react';

import HomePage from './HomePage';

function renderWithRouter() {
  const history = createMemoryHistory();
  const wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  );
  return {
    ...render(<HomePage />, { wrapper }),
    history,
  };
}

test('renders correctly', () => {
  renderWithRouter();
  const heroTitle = screen.queryByTestId('HomePage__heroTitle');
  expect(heroTitle).toBeInTheDocument();
  expect(heroTitle).toHaveTextContent(/Encuentra nuevas/);
});

test('share scholarship link', () => {
  const { history } = renderWithRouter();
  const description = screen.getByText('¿Conoces alguna beca?');

  userEvent.click(getByText(description, '¡Compártela!'));
  expect(history.location.pathname).toBe('/');
});

test('search bar should redirect to search page', () => {
  const { history } = renderWithRouter();

  const input = screen.getByPlaceholderText('Busca tu beca');
  expect(input).toHaveValue('');

  const searchTerm = 'foo';
  userEvent.type(input, `${searchTerm}{enter}`);
  expect(history.location.pathname).toBe('/buscar');

  const searchParams = new URLSearchParams(history.location.search);
  expect(searchParams.has('term')).toBe(true);
  expect(searchParams.get('term')).toBe(searchTerm);
});
