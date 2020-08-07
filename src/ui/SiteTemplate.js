import React from 'react';
import { useHistory } from 'react-router-dom';

import AppLogo from 'ui/AppLogo';
import Spinner from 'ui/Spinner';
import PageRibbon from 'ui/PageRibbon';
import { SearchBar } from 'ui/SearchBar';
import { AppFooter } from 'ui/AppFooter';

export function SiteTemplate({ children }) {
  const history = useHistory();

  const handleSearch = term => {
    if (history.location.pathname !== '/buscar') {
      history.push(`/buscar?term=${term}`, { isSearching: true });
    }
  };

  return (
    <>
      <div
        className="min-h-screen flex flex-col"
        style={{ background: '#fafdff' }}
      >
        <PageRibbon />

        <div className="w-full max-w-xl lg:max-w-6xl mx-auto mt-2 lg:mt-8 px-4">
          <header className="flex items-center flex-wrap">
            <div className="lg:w-full max-w-xs">
              <AppLogo />
            </div>

            <div className="w-full lg:max-w-sm mt-5 lg:mt-0 order-last lg:order-none">
              <SearchBar onSubmit={handleSearch} />
            </div>

            <div className="flex-1 flex justify-end">
              <a
                href="/admin"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary px-3 py-2 uppercase hover:underline focus:underline"
              >
                Acceder
              </a>
            </div>
          </header>
        </div>

        <div className="flex-1">
          <div className="w-full max-w-xl lg:max-w-6xl mx-auto mt-4 sm:mt-8 px-4 pb-8">
            <React.Suspense
              fallback={
                <div className="text-center">
                  <Spinner />
                </div>
              }
            >
              {children}
            </React.Suspense>
          </div>
        </div>
      </div>

      <AppFooter />
    </>
  );
}
