import React from 'react';
import { Link } from 'react-router-dom';

import AppLogo from 'ui/components/AppLogo';

import HamburguerMenu, {
  MenuItem,
  MenuButton,
  useHamburguer,
} from 'ui/components/HamburguerMenu';

const links = [
  { text: 'Inicio', href: '/' },
  { text: 'Buscar', href: '/buscar' },
];

function AppHeader() {
  const menu = useHamburguer();
  return (
    <header data-testid="AppHeader">
      <div className="flex items-center justify-between">
        <AppLogo />

        <div className="flex-1 flex items-center justify-end">
          <nav className="hidden sm:block">
            {links.map(link => (
              <Link
                to={link.href}
                key={link.href}
                className="py-4 px-6 hover:underline"
              >
                {link.text}
              </Link>
            ))}
          </nav>

          <MenuButton
            className="sm:hidden"
            {...menu.getToggleButtonProps()}
            data-testid="AppHeader__menuButton"
          />
        </div>
      </div>

      <HamburguerMenu isOpen={menu.isOpen} data-testid="AppHeader__hamburguer">
        {links.map(link => (
          <MenuItem to={link.href} key={link.href}>
            {link.text}
          </MenuItem>
        ))}
      </HamburguerMenu>
    </header>
  );
}

export default AppHeader;
