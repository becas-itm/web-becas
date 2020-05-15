import React from 'react';
import { Link } from 'react-router-dom';

import AppLogo from 'ui/components/AppLogo';

import HamburgerMenu, {
  MenuItem,
  MenuButton,
  useHamburger,
} from 'ui/components/HamburgerMenu';

import links from 'utils/siteLinks';

export function HomeHeader() {
  const menu = useHamburger();
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

      <HamburgerMenu isOpen={menu.isOpen} data-testid="HomeHeader__hamburger">
        {links.map(link => (
          <MenuItem to={link.href} key={link.href}>
            {link.text}
          </MenuItem>
        ))}
      </HamburgerMenu>
    </header>
  );
}
