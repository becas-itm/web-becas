import React from 'react';

import Spinner from 'ui/Spinner';
import PageRibbon from 'ui/PageRibbon';
import { AppFooter } from 'ui/AppFooter';
import { useFilters, mergeFilters, useQueryFilters } from 'utils/hooks/search';

import SearchResults from './SearchResults';
import { SearchHeader } from './SearchHeader';
import { SearchProvider } from './SearchContext';
import SiteFilters, { DEFAULT_FILTERS } from './SiteFilters/SiteFilters';

const INITIAL_FILTERS = {
  page: 1,
  term: '',
  ...DEFAULT_FILTERS,
};

function SearchPage() {
  const queryFilters = useQueryFilters();

  const initialState = React.useMemo(
    () => mergeFilters(INITIAL_FILTERS, queryFilters.filters),
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  const search = useFilters(initialState);
  const searchUrl = `/search/scholarships/${search.stringify()}`;

  return (
    <SearchProvider value={search}>
      <div
        className="min-h-screen flex flex-col"
        style={{ background: '#fafdff' }}
      >
        <PageRibbon />

        <div className="w-full max-w-xl lg:max-w-6xl mx-auto mt-2 lg:mt-8 px-4">
          <SearchHeader />
        </div>

        <div className="flex-1">
          <div className="w-full max-w-xl lg:max-w-6xl mx-auto mt-4 lg:mt-12 px-4 pb-8">
            <div className="w-full">
              <div className="flex">
                <section className="hidden lg:block w-1/4 mr-12">
                  <h1 className="text-base text-medium font-semibold mb-6">
                    Filtros
                  </h1>
                  <SiteFilters />
                </section>
                <main className="w-full lg:w-3/4">
                  <React.Suspense
                    fallback={
                      <div className="text-center mt-4">
                        <Spinner />
                      </div>
                    }
                  >
                    <SearchResults
                      onPage={search.setPage}
                      searchUrl={searchUrl}
                    />
                  </React.Suspense>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppFooter />
    </SearchProvider>
  );
}

export default SearchPage;
