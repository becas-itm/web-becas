import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';

import { ResetForm } from './ResetForm';
import { TokenExpired } from './TokenExpired';
import { PasswordReset } from './PasswordReset';

export default {
  title: 'Auth / Reset Page',
  decorators: [withKnobs, storyFn => <MemoryRouter>{storyFn()}</MemoryRouter>],
};

export const resetForm = () => (
  <ResetForm
    onSubmit={action('onSubmit')}
    user={{ gender: 'male', displayName: text('user', 'John Doe') }}
    isLoading={boolean('isLoading')}
  />
);

export const tokenExpired = () => <TokenExpired />;

export const passwordReset = () => <PasswordReset />;
