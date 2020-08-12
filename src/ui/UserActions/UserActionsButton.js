import React from 'react';
import { MenuButton } from '@reach/menu-button';
import { MdKeyboardArrowDown } from 'react-icons/md';

import Avatar from 'ui/Avatar';

import { getFirstName } from './getFirstName';

export function UserActionsButton({ children: userName }) {
  return (
    <MenuButton className="flex items-center rounded-sm py-1 px-2 hover:bg-gray-200 active:bg-gray-200 focus:bg-gray-200">
      <Avatar name={userName} size={32} />
      <div className="ml-3 hidden xs:block">{getFirstName(userName)}</div>
      <span aria-hidden className="ml-2">
        <MdKeyboardArrowDown size={24} />
      </span>
    </MenuButton>
  );
}
