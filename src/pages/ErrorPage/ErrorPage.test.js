import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorPage from './index';

const renderPage = () => render(<ErrorPage />, { wrapper: MemoryRouter });

it('should have the App logo', () => {
  renderPage();
  const logo = screen.queryByTestId('AppLogo');
  expect(logo).toBeInTheDocument();
});

it('should have a title', () => {
  renderPage();
  expect(screen.queryByText('Algo salió mal')).toBeInTheDocument();
});

it('should have a description', () => {
  renderPage();
  expect(
    screen.queryByText('No te preocupes, lo estamos arreglando.'),
  ).toBeInTheDocument();
});

describe('reload action button', () => {
  const buttonText = 'Recargar página';

  it('should be rendered', () => {
    renderPage();
    expect(screen.queryByText(buttonText)).toBeInTheDocument();
  });

  it('click should reload the current page', () => {
    const reload = jest.fn();

    delete window.location;
    window.location = { reload };

    renderPage();
    fireEvent.click(screen.getByText(buttonText));
    expect(reload).toHaveBeenCalledTimes(1);
  });
});
