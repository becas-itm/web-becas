import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

import { api } from 'utils/api2';

import RecoverPage from './RecoverPage';

jest.mock('utils/api2');

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

test('page renders correctly', () => {
  expect(screen.getByTestId('pageTitle')).toHaveTextContent('Recuperar cuenta');

  const submitButton = form.submit();
  expect(submitButton).toBeInTheDocument();
  expect(submitButton).not.toBeDisabled();

  const inputEmail = form.email();
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveValue('');
});

test('successful recover request', async () => {
  api.post.mockImplementationOnce(() => Promise.resolve());

  const label = screen.getByText('Correo electrónico');
  userEvent.click(label);

  const email = 'foo@bar.com';
  const inputEmail = form.email();
  expect(inputEmail).toHaveFocus();
  expect(inputEmail).toHaveValue('');
  userEvent.type(inputEmail, email);

  userEvent.click(form.submit());

  await waitFor(() => {
    expect(api.post).toHaveBeenCalledTimes(1);
    expect(api.post.mock.calls[0][1]).toEqual({ email });
  });

  const confirmationMessage = 'Te hemos enviado un enlace a';
  expect(screen.queryByText(confirmationMessage)).toBeInTheDocument();
  expect(screen.getByTestId('submittedEmail')).toHaveTextContent(email);
});

test('form gets validated before submit', () => {
  api.post.mockImplementationOnce(() => Promise.resolve());
  const submitButton = form.submit();
  userEvent.click(submitButton);
  return waitFor(() => {
    expect(screen.getByText('Ingresa tu correo')).toBeInTheDocument();
  });
});
