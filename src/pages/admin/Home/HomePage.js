import React from 'react';
import { useAuth } from 'auth/index';

import AppLogo from 'ui/components/AppLogo';
import UserActions from 'ui/components/UserActions';
import { Event, SupervisorAccount, Business } from 'ui/components/Icon';

import HamburgerMenu, {
  MenuButton,
  useHamburger,
} from 'ui/components/HamburgerMenu';

import { greetUser } from './greetUser';
import NavigationItem from './NavigationItem';
import './HomePage.scss';

const navItems = [
  {
    to: '/admin/pendientes',
    icon: Event,
    title: 'Convocatorias',
    description: 'Crea, aprueba y rechaza nuevas convocatorias',
  },
  {
    to: '/admin/entidades',
    icon: Business,
    title: 'Entidades',
    description: 'Agregar y editar entidades que ofrecen becas',
  },
  {
    to: '/admin/usuarios',
    icon: SupervisorAccount,
    title: 'Usuarios',
    description: 'Ver e invitar a otros administradores',
  },
];

export function HomePage() {
  const menu = useHamburger();
  const { user, signOut } = useAuth();

  return (
    <>
      <div className="h-1 w-full bg-primary" />

      <div className="p-4 lg:mt-10 w-full max-w-screen-lg mx-auto">
        <header className="flex items-center justify-between flex-wrap">
          <AppLogo>Admin</AppLogo>

          <div className="hidden sm:block">
            <UserActions user={user} onLogout={signOut} />
          </div>

          <MenuButton className="sm:hidden" {...menu.getToggleButtonProps()} />
        </header>

        <HamburgerMenu isOpen={menu.isOpen}>
          <div className="flex justify-center mt-4">
            <UserActions user={user} onLogout={signOut} />
          </div>
        </HamburgerMenu>

        <h1
          className="text-2xl sm:text-3xl mt-6 sm:mt-12 text-center"
          data-testid="WelcomeMessage"
        >
          {greetUser(user.displayName)}
        </h1>

        <nav className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-around mt-6 sm:mt-12">
          {navItems.map(item => (
            <div className="mb-2 sm:mb-8" key={item.to}>
              <NavigationItem {...item} />
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}

export default HomePage;
