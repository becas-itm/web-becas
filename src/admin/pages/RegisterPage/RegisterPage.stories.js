import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { text, withKnobs, boolean } from '@storybook/addon-knobs';

import { RegisterForm } from './RegisterForm';
import { TokenExpired } from './TokenExpired';
import { RegisterCompleted } from './RegisterCompleted';

export default {
  title: 'Auth / Register Page',
  decorators: [withKnobs, storyFn => <MemoryRouter>{storyFn()}</MemoryRouter>],
};

export const registerForm = () => (
  <RegisterForm
    user={{ gender: 'male', displayName: text('Name', 'John Doe') }}
    token={text('Token', 'test')}
    onSubmit={action('onSubmit')}
    isLoading={boolean('Loading')}
  />
);

export const registerCompleted = () => <RegisterCompleted />;

export const tokenExpired = () => <TokenExpired />;
