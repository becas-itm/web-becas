import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

import { RecoverForm } from './RecoverForm';
import { RecoverRequestSent } from './RecoverRequestSent';

export default {
  title: 'Auth / Recover Page',
  decorators: [withKnobs, storyFn => <MemoryRouter>{storyFn()}</MemoryRouter>],
};

export const recoverForm = () => <RecoverForm onSubmit={action('onSubmit')} />;

export const recoverRequestSent = () => (
  <RecoverRequestSent email={text('Email', 'john@doe.com')} />
);
