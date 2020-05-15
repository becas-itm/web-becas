import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SupervisorAccount } from 'ui/components/Icon';

import NavigationItem from './NavigationItem';
import HomeNavigation from './HomeNavigation';
import './Home.scss';

export default {
  title: 'Admin / Home',
  component: NavigationItem,
  decorators: [
    storyFn => (
      <BrowserRouter>
        <div className="p-4">{storyFn()}</div>
      </BrowserRouter>
    ),
  ],
};

export const navItem = () => (
  <NavigationItem
    to="#"
    icon={SupervisorAccount}
    title="Usuarios"
    description="Ver e invitar a otros administradores"
  />
);

export const allNavItems = () => <HomeNavigation />;
