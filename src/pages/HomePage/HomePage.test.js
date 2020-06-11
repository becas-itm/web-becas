import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor, getByText } from '@testing-library/react';

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

  expect(
    screen.queryByText('Encuentra nuevas oportunidades en el exterior'),
  ).toBeInTheDocument();
});

test('share scholarship link', () => {
  const { history } = renderWithRouter();
  const description = screen.getByText('¿Conoces alguna beca?');

  userEvent.click(getByText(description, '¡Compártela!'));
  expect(history.location.pathname).toBe('/');
});

test('search bar should redirect to search page', async () => {
  const { history } = renderWithRouter();

  const input = screen.getByPlaceholderText('Busca tu beca');
  expect(input).toHaveValue('');

  const searchTerm = 'foo';
  userEvent.type(input, searchTerm);
  userEvent.click(screen.getByTestId('SearchBar__startButton'));
  expect(history.location.pathname).toBe('/buscar');

  const searchParams = new URLSearchParams(history.location.search);
  expect(searchParams.has('term')).toBe(true);
  expect(searchParams.get('term')).toBe(searchTerm);
});

test.each([
  ['Inicio', '/'],
  ['Buscar', '/buscar'],
])('Header should have a link to `%s`', (text, href) => {
  const { history } = renderWithRouter();
  const header = screen.getByTestId('HomeHeader');
  userEvent.click(getByText(header, text));
  expect(history.location.pathname).toBe(href);
});

test('Navigation menu', () => {
  renderWithRouter();
  const menuButton = screen.getByTestId('HomeHeader__menuButton');

  const hamburgerId = 'HomeHeader__hamburger';
  expect(screen.queryByTestId(hamburgerId)).not.toBeInTheDocument();
  userEvent.click(menuButton);
  return waitFor(() => {
    expect(screen.getByTestId(hamburgerId)).toBeInTheDocument();
  });
});
