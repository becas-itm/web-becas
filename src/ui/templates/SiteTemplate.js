import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import AppLogo from 'ui/AppLogo';
import SearchBar from 'ui/SearchBar';
import { ThreeRowTemplate } from 'ui/templates/ThreeRowTemplate';

import HamburgerMenu, {
  MenuItem,
  MenuButton,
  useHamburger,
} from 'ui/HamburgerMenu';

import links from 'utils/siteLinks';

function RedirectSearchBar() {
  const history = useHistory();

  const handleSearch = term => {
    if (history.location.pathname !== '/buscar') {
      history.push(`/buscar?term=${term}`, { isSearching: true });
    }
  };

  return <SearchBar onChange={handleSearch} />;
}

export function SiteTemplate({ searchBar, ...restProps }) {
  const menu = useHamburger();

  if (!searchBar) {
    searchBar = <RedirectSearchBar />;
  }

  return (
    <ThreeRowTemplate
      header={
        <div className="p-4 lg:pt-10 pb-0 max-w-screen-xl mx-auto mb-8 sm:mb-12">
          <header data-testid="AppHeader">
            <div className="flex items-center justify-between">
              <Link to="/" className="inline-flex items-center">
                <AppLogo />
              </Link>

              <div className="flex-1 flex items-center justify-end">
                <div className="flex-1 flex items-center justify-center">
                  <div className="hidden md:block mx-8 w-full max-w-lg">
                    {searchBar}
                  </div>
                </div>

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

            <HamburgerMenu
              isOpen={menu.isOpen}
              data-testid="AppHeader__hamburger"
            >
              {links.map(link => (
                <MenuItem to={link.href} key={link.href}>
                  {link.text}
                </MenuItem>
              ))}
            </HamburgerMenu>

            <div className="md:hidden mt-6">{searchBar}</div>
          </header>
        </div>
      }
      {...restProps}
    />
  );
}
