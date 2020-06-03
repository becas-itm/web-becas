import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

import * as api from 'utils/api';

import RecoverPage from './RecoverPage';

jest.mock('utils/api');

beforeEach(() => {
  render(
    <MemoryRouter>
      <RecoverPage />
    </MemoryRouter>,
  );
});

const form = {
  email: () => screen.queryByPlaceholderText('ejemplo@itm.edu.co'),
  submit: () => screen.queryByText('Continuar'),
};

test('should render correctly', () => {
  const title = screen.queryByTestId('pageTitle');
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('Recuperar cuenta');
});

test('should have an email field', () => {
  const label = screen.getByText('Correo electrónico');
  userEvent.click(label);
  expect(form.email()).toHaveFocus();
});

describe('Form validation', () => {
  const missingEmail = 'Ingresa tu correo';

  it('submit button should be initially clickable', () => {
    const button = form.submit();
    expect(button).not.toBeDisabled();
    userEvent.click(button);
    return waitFor(() =>
      expect(screen.getByText(missingEmail)).toBeInTheDocument(),
    );
  });

  it('email should not be empty', () => {
    expect(form.email()).toHaveValue('');
    userEvent.click(form.submit());
    return waitFor(() =>
      expect(screen.getByText(missingEmail)).toBeInTheDocument(),
    );
  });
});

it('should submit the form', () => {
  api.post.mockResolvedValueOnce();

  userEvent.type(form.email(), 'foo@bar.com');
  userEvent.click(form.submit());

  return waitFor(() => {
    expect(api.post).toHaveBeenCalledTimes(1);
    expect(api.post.mock.calls[0][1]).toEqual({ email: 'foo@bar.com' });
  });
});

it('should show confirmation message', () => {
  api.post.mockResolvedValueOnce();

  const email = 'foo@bar.com';
  const message = 'Te hemos enviado un enlace a';

  userEvent.type(form.email(), email);
  userEvent.click(form.submit());

  return waitFor(() => {
    expect(screen.queryByText(message)).toBeInTheDocument();
    expect(screen.getByTestId('submittedEmail')).toHaveTextContent(email);
  });
});
