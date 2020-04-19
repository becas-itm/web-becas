import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import AppLogo from 'ui/components/AppLogo';
import SearchBar from 'ui/components/SearchBar';
import { ThreeRowTemplate } from 'ui/templates/ThreeRowTemplate';

import HamburguerMenu, {
  MenuItem,
  MenuButton,
  useHamburguer,
} from 'ui/components/HamburguerMenu';

const links = [
  { text: 'Inicio', href: '/' },
  { text: 'Buscar', href: '/buscar' },
];

function RedirectSearchBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = term => {
    if (location.pathname !== '/buscar') {
      navigate(`/buscar?term=${term}`, { state: { isSearching: true } });
    }
  };

  return <SearchBar onChange={handleSearch} />;
}

export function SiteTemplate({ searchBar, ...restProps }) {
  const menu = useHamburguer();

  if (!searchBar) {
    searchBar = <RedirectSearchBar />;
  }

  return (
    <ThreeRowTemplate
      header={
        <div className="p-4 lg:pt-10 pb-0 max-w-screen-xl mx-auto mb-8 sm:mb-12">
          <header data-testid="AppHeader">
            <div className="flex items-center justify-between">
              <AppLogo />

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

            <HamburguerMenu
              isOpen={menu.isOpen}
              data-testid="AppHeader__hamburguer"
            >
              {links.map(link => (
                <MenuItem to={link.href} key={link.href}>
                  {link.text}
                </MenuItem>
              ))}
            </HamburguerMenu>

            <div className="md:hidden mt-6">{searchBar}</div>
          </header>
        </div>
      }
      {...restProps}
    />
  );
}
