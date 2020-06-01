import React from 'react';
import { useAuth } from 'auth/index';
import { useToggle } from 'utils/hooks';

import AppLogo from 'ui/components/AppLogo';
import AppFooter from 'ui/components/AppFooter';
import IconButton from 'ui/components/IconButton';
import UserActions from 'ui/components/UserActions';
import NavRail, { NavItem } from 'ui/components/NavRail';

import {
  Home,
  Inbox,
  SupervisorAccount,
  Menu,
  Business,
} from 'ui/components/Icon';

import { MenuDrawer } from './MenuDrawer';
import './AdminTemplate.css';

const AdminTemplate = React.memo(function AdminTemplate({
  children,
  ...restProps
}) {
  const { user, signOut } = useAuth();
  const [showMenu, toggleMenu] = useToggle();

  return (
    <div className="AdminTemplate">
      <header className="bg-white border-b">
        <div className="h-16 flex items-center justify-between mx-auto px-4">
          <AppLogo>Admin</AppLogo>
          <div>
            <div className="hidden sm:block">
              <UserActions user={user} onLogout={signOut} />
            </div>
            <div className="sm:hidden">
              <IconButton onClick={toggleMenu} icon={Menu}>
                Abrir menú
              </IconButton>
            </div>
          </div>
        </div>
      </header>

      <NavRail>
        <NavItem exact to="/admin" icon={Home}>
          Inicio
        </NavItem>
        <NavItem to="/admin/pendientes" icon={Inbox}>
          Becas
        </NavItem>
        <NavItem to="/admin/entidades" icon={Business}>
          Entidades
        </NavItem>
        <NavItem to="/admin/usuarios" icon={SupervisorAccount}>
          Usuarios
        </NavItem>
      </NavRail>

      <div {...restProps}>{children}</div>

      <AppFooter />

      {showMenu && (
        <MenuDrawer user={user} onDismiss={toggleMenu} onLogout={signOut} />
      )}
    </div>
  );
});

export default AdminTemplate;
