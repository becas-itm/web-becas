import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, fireEvent } from '@testing-library/react';

import { HomeHeader as BaseHomeHeader } from './HomeHeader';

describe('Header', () => {
  const HomeHeader = props => (
    <MemoryRouter>
      <BaseHomeHeader {...props} />
    </MemoryRouter>
  );

  test('renders correctly', () => {
    const { queryByTestId } = render(<HomeHeader />);
    const header = queryByTestId('HomeHeader');
    expect(header).toBeInTheDocument();
    expect(header.tagName).toBe('HEADER');
  });

  describe('navigation links', () => {
    it('should have a link to Home Page', () => {
      const { queryByText } = render(<HomeHeader />);
      const item = queryByText('Inicio');
      expect(item).toBeInTheDocument();
      expect(item).toHaveAttribute('href', '/');
    });

    it('should have a link to Search Page', () => {
      const { queryByText } = render(<HomeHeader />);
      const item = queryByText('Buscar');
      expect(item).toBeInTheDocument();
      expect(item).toHaveAttribute('href', '/buscar');
    });
  });

  describe('Navigation menu', () => {
    const buttonId = 'HomeHeader__menuButton';

    it('should render a toggle button', () => {
      const { queryByTestId } = render(<HomeHeader />);
      expect(queryByTestId(buttonId)).toBeInTheDocument();
    });

    it('should open navigation on click menu button', () => {
      const { getByTestId, queryByTestId } = render(<HomeHeader />);
      const button = getByTestId(buttonId);

      fireEvent.click(button);

      expect(queryByTestId('HomeHeader__hamburguer')).toBeInTheDocument();
    });
  });
});
