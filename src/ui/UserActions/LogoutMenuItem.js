import React from 'react';
import { MenuItem } from '@reach/menu-button';
import { MdPowerSettingsNew } from 'react-icons/md';

import styles from './LogoutMenuItem.module.css';

export function LogoutMenuItem({ onClick }) {
  return (
    <MenuItem onSelect={onClick} className={styles.button}>
      <span className="p-3" aria-hidden>
        <MdPowerSettingsNew size={24} />
      </span>
      Salir
    </MenuItem>
  );
}
