import React from 'react';
import { useUser } from 'utils/hooks/auth';
import { Link, NavLink } from 'react-router-dom';

import Avatar from 'ui/components/Avatar';
import { ExitToApp } from 'ui/components/Icon';
import Button, { COLOR } from 'ui/components/Button';
import Dialog, { Title, KIND, CloseBtn } from 'ui/components/Dialog';

function MenuItem({ to, children }) {
  return (
    <li className="h-12 px-2" style={{ paddingTop: 2, paddingBottom: 2 }}>
      <NavLink
        to={to}
        activeClassName="-selected"
        className="MenuDrawer-Item flex items-center rounded px-2 w-full h-full"
      >
        {children}
      </NavLink>
    </li>
  );
}

export function MenuDrawer({ onDismiss, onLogout }) {
  const user = useUser();
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

        <Link to="/admin/perfil" className="MenuDrawer-user flex items-center">
          <Avatar src={user.photoURL} size={36} className="shadow-xs mr-3" />
          <h3 className="text-gray-700">{user.displayName}</h3>
        </Link>
      </header>

      <nav>
        <ul>
          <MenuItem onClick={onDismiss} to="/admin">
            Inicio
          </MenuItem>

          <MenuItem onClick={onDismiss} to="/admin/pendientes">
            Becas pendientes
          </MenuItem>

          <MenuItem onClick={onDismiss} to="/admin/usuarios">
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
