import React from 'react';
import { Link } from 'react-router-dom';

import AppLogo from 'ui/components/AppLogo';

import HamburguerMenu, {
  MenuItem,
  MenuButton,
  useHamburguer,
} from 'ui/components/HamburguerMenu';

import links from 'utils/siteLinks';

export function HomeHeader() {
  const menu = useHamburguer();
  return (
    <header data-testid="HomeHeader">
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
            data-testid="HomeHeader__menuButton"
          />
        </div>
      </div>

      <HamburguerMenu isOpen={menu.isOpen} data-testid="HomeHeader__hamburguer">
        {links.map(link => (
          <MenuItem to={link.href} key={link.href}>
            {link.text}
          </MenuItem>
        ))}
      </HamburguerMenu>
    </header>
  );
}
