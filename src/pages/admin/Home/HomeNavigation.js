import React from 'react';
import { Event, SupervisorAccount } from 'ui/components/Icon';

import NavigationItem from './NavigationItem';

const navItems = [
  {
    to: '/admin/pendientes',
    icon: Event,
    title: 'Convocatorias',
    description: 'Crea, aprueba y rechaza nuevas convocatorias',
  },
  {
    to: '/admin/usuarios',
    icon: SupervisorAccount,
    title: 'Usuarios',
    description: 'Ver e invitar a otros administradores',
  },
];

export default function HomeNavigation() {
  return (
    <nav className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-around">
      {navItems.map(item => (
        <div className="mb-2 sm:mb-8" key={item.to}>
          <NavigationItem {...item} />
        </div>
      ))}
    </nav>
  );
}
