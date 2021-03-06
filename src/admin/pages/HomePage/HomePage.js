import React from 'react';
import { useAuth } from 'auth/hooks';

import AppLogo from 'ui/AppLogo';
import PageRibbon from 'ui/PageRibbon';
import UserActions from 'ui/UserActions';
import { Event, SupervisorAccount, Business } from 'ui/Icon';

import { greetUser } from './greetUser';
import NavigationItem from './NavigationItem';
import './HomePage.scss';

const navItems = [
  {
    to: '/becas',
    icon: Event,
    title: 'Convocatorias',
    description: 'Crear, aprobar y rechazar nuevas convocatorias',
  },
  {
    to: '/entidades',
    icon: Business,
    title: 'Entidades',
    description: 'Agregar y editar entidades que ofertan becas y convocatorias',
  },
  {
    to: '/usuarios',
    icon: SupervisorAccount,
    title: 'Usuarios',
    description: 'Ver e invitar a otros administradores',
  },
];

export function HomePage() {
  const { user, logout } = useAuth();

  return (
    <>
      <PageRibbon />

      <div className="p-4 lg:mt-10 w-full max-w-screen-lg mx-auto">
        <header className="flex items-center justify-between flex-wrap">
          <AppLogo>Admin</AppLogo>

          <UserActions user={user} onLogout={logout} />
        </header>

        <h1
          className="text-2xl sm:text-3xl mt-6 sm:mt-12 text-center"
          data-testid="WelcomeMessage"
        >
          {greetUser(user.displayName)}
        </h1>

        <nav className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-around mt-6 sm:mt-12">
          {navItems.map(item => (
            <div className="mb-5 sm:mb-8" key={item.to}>
              <NavigationItem {...item} />
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}

export default HomePage;
