import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { ExitToApp } from 'ui/Icon';
import GenderAvatar from 'ui/GenderAvatar';
import Button, { COLOR } from 'ui/Button';
import Dialog, { Title, KIND, CloseBtn } from 'ui/Dialog';

function MenuItem({ to, children }) {
  return (
    <li>
      <NavLink
        to={to}
        activeClassName="bg-blue-50 text-primary font-semibold -selected"
        className="MenuDrawer-Item flex items-center rounded px-2 mx-2 my-1 h-12 hover:underline"
      >
        {children}
      </NavLink>
    </li>
  );
}

export function MenuDrawer({ user, onDismiss, onLogout }) {
  return (
    <Dialog
      isOpen
      onDismiss={onDismiss}
      aria-labelledby="menu-title"
      kind={KIND.full}
      className="p-0"
      style={{ width: 'calc(100% - 56px)', minWidth: 256, maxWidth: 320 }}
    >
      <header className="px-4 py-6">
        <Title id="menu-title" className="mb-3">
          Menú
        </Title>
        <CloseBtn onClick={onDismiss} />

        <Link to="/perfil" className="MenuDrawer-user flex items-center">
          <GenderAvatar gender={user.gender} className="mr-3" />
          <h3 className="text-lg">{user.displayName}</h3>
        </Link>
      </header>

      <nav>
        <ul>
          <MenuItem onClick={onDismiss} to="/">
            Inicio
          </MenuItem>

          <MenuItem onClick={onDismiss} to="/pendientes">
            Becas pendientes
          </MenuItem>

          <MenuItem onClick={onDismiss} to="/usuarios">
            Usuarios
          </MenuItem>

          <li className="border-b select-none my-2" />

          <li className="h-12 px-2 py-1">
            <Button
              onClick={onLogout}
              color={COLOR.danger}
              outline
              wide
              labelClass="flex-1 text-left"
            >
              <ExitToApp className="mr-3" />
              Cerrar sesión
            </Button>
          </li>
        </ul>
      </nav>
    </Dialog>
  );
}
