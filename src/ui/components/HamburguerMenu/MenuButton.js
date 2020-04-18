import React from 'react';
import { Menu } from '../Icon';
import IconButton from '../IconButton';

export function MenuButton({ onClick, ...restProps }) {
  return (
    <IconButton
      data-testid="HamburguerMenu__Button"
      {...restProps}
      icon={Menu}
      onClick={onClick}
    >
      Abrir menú
    </IconButton>
  );
}
