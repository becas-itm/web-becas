import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, fireEvent } from '@testing-library/react';
import BaseAppHeader from './index';

const AppHeader = props => (
  <MemoryRouter>
    <BaseAppHeader {...props} />
  </MemoryRouter>
);

test('renders correctly', () => {
  const { queryByTestId } = render(<AppHeader />);
  const header = queryByTestId('AppHeader');
  expect(header).toBeInTheDocument();
  expect(header.tagName).toBe('HEADER');
});

describe('navigation links', () => {
  it('should have a link to Home Page', () => {
    const { queryByText } = render(<AppHeader />);
    const item = queryByText('Inicio');
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute('href', '/');
  });

  it('should have a link to Search Page', () => {
    const { queryByText } = render(<AppHeader />);
    const item = queryByText('Buscar');
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute('href', '/buscar');
  });
});

describe('Navigation menu', () => {
  const buttonId = 'AppHeader__menuButton';

  it('should render a toggle button', () => {
    const { queryByTestId } = render(<AppHeader />);
    expect(queryByTestId(buttonId)).toBeInTheDocument();
  });

  it('should open navigation on click menu button', () => {
    const { getByTestId, queryByTestId } = render(<AppHeader />);
    const button = getByTestId(buttonId);

    fireEvent.click(button);

    expect(queryByTestId('AppHeader__hamburguer')).toBeInTheDocument();
  });
});
