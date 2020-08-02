import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AppLogo from './index';

const renderLogo = (props = {}) =>
  render(<AppLogo {...props} />, { wrapper: MemoryRouter });

test('should render correctly', () => {
  renderLogo();
  expect(
    screen.queryByAltText('Instituto Tecnológico Metropolitano'),
  ).toBeInTheDocument();
  expect(screen.getByTestId('AppLogo')).toHaveProperty(
    'href',
    'http://localhost/',
  );
});

test('logo title', () => {
  renderLogo({ children: 'foo' });
  expect(screen.queryByText('foo')).toBeInTheDocument();
});
