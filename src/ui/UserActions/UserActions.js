import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuList, MenuLink } from '@reach/menu-button';

import { UserOverviewItem } from './UserOverviewItem';
import { UserActionsButton } from './UserActionsButton';
import { LogoutMenuItem } from './LogoutMenuItem';

export default function UserActions({ user, onLogout }) {
  const userName = user.displayName || 'Usuario';
  return (
    <Menu>
      <UserActionsButton>{userName}</UserActionsButton>
      <MenuList
        className="border-none shadow rounded-sm p-0 pb-2"
        style={{ minWidth: 248 }}
      >
        <UserOverviewItem userName={userName} email={user.email} />
        <div className="mt-4" />
        <MenuLink to="perfil" as={Link}>
          Ver perfil
        </MenuLink>
        <MenuLink to="/" as={Link}>
          Panel de administración
        </MenuLink>
        <LogoutMenuItem onClick={onLogout} />
      </MenuList>
    </Menu>
  );
}
