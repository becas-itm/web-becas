import React from 'react';
import { NavLink } from 'react-router-dom';

import AppLogo from 'ui/AppLogo';
import { useAuth } from 'auth/hooks';
import UserActions from 'ui/UserActions';

export function AdminHeader() {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center flex-wrap">
      <div className="lg:w-full max-w-xs">
        <AppLogo>Admin</AppLogo>
      </div>

      <nav className="w-full lg:max-w-xs mt-2 lg:mt-0 order-last lg:order-none">
        <ul className="flex flex-wrap text-center text-medium">
          <li className="flex-1">
            <NavLink
              to="/becas"
              className="block px-2 py-3 hover:text-primary"
              activeClassName="font-semibold text-primary"
            >
              Becas
            </NavLink>
          </li>
          <li className="flex-1">
            <NavLink
              to="/entidades"
              className="block px-2 py-3 hover:text-primary"
              activeClassName="font-semibold text-primary"
            >
              Entidades
            </NavLink>
          </li>
          <li className="flex-1">
            <NavLink
              to="/usuarios"
              className="block px-2 py-3 hover:text-primary"
              activeClassName="font-semibold text-primary"
            >
              Usuarios
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex-1 flex justify-end">
        <UserActions user={user} onLogout={logout} />
      </div>
    </header>
  );
}
