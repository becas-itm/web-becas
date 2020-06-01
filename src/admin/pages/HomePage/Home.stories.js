import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SupervisorAccount } from 'ui/Icon';

import NavigationItem from './NavigationItem';
import './HomePage.scss';

export default {
  title: 'Admin / Home',
  component: NavigationItem,
  decorators: [storyFn => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const navItem = () => (
  <div className="p-4">
    <NavigationItem
      to="#"
      icon={SupervisorAccount}
      title="Usuarios"
      description="Ver e invitar a otros administradores"
    />
  </div>
);
