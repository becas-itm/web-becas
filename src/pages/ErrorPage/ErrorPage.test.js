import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ErrorPage from './index';

const renderPage = () => render(<ErrorPage />);

it('should have the App logo', () => {
  const { queryByTitle } = renderPage();
  const logo = queryByTitle('Logo ITM');
  expect(logo).toBeInTheDocument();
});

it('should have a title', () => {
  const { queryByText } = renderPage();
  const title = queryByText('Algo salió mal');
  expect(title).toBeInTheDocument();
});

it('should have a description', () => {
  const { queryByText } = renderPage();
  const description = queryByText('No te preocupes, lo estamos arreglando.');
  expect(description).toBeInTheDocument();
});

describe('reload action button', () => {
  const buttonText = 'Recargar página';

  it('should be rendered', () => {
    const { queryByText } = renderPage();
    const button = queryByText(buttonText);
    expect(button).toBeInTheDocument();
  });

  it('click should reload the current page', () => {
    const reload = jest.fn();

    delete window.location;
    window.location = { reload };

    const { getByText } = renderPage();
    const button = getByText(buttonText);
    fireEvent.click(button);
    expect(reload).toHaveBeenCalledTimes(1);
  });
});
