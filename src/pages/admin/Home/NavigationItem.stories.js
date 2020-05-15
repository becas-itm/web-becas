import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Event } from 'ui/components/Icon';
import NavigationItem from './NavigationItem';
import HomeNavigation from './HomeNavigation';
import './Home.scss';

export default {
  title: 'NavigationItem',
  component: NavigationItem,
};

export const initial = () => (
  <div className="m-4">
    <BrowserRouter>
      <NavigationItem
        to="#"
        icon={Event}
        title="Usuarios"
        description="Curabitur eu est et leo feugiat"
      />
    </BrowserRouter>
  </div>
);

export const allItems = () => (
  <BrowserRouter>
    <div className="m-4">
      <HomeNavigation />
    </div>
  </BrowserRouter>
);
