import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import UserActions from './index';

const user = {
  email: 'john@doe.com',
  displayName: 'John Doe',
};

export default {
  title: 'UserActions',
  component: UserActions,
};

export const normal = () => (
  <BrowserRouter>
    <div className="flex justify-end">
      <UserActions user={user} onLogout={action('onLogout')} />
    </div>
  </BrowserRouter>
);
