import React from 'react';
import { Menu } from 'ui/Icon';
import IconButton from 'ui/IconButton';

export function MenuButton({ onClick, ...restProps }) {
  return (
    <IconButton
      data-testid="HamburgerMenu__Button"
      {...restProps}
      icon={Menu}
      onClick={onClick}
    >
      Abrir menú
    </IconButton>
  );
}
