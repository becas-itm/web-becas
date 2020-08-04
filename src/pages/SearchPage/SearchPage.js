import React from 'react';

import Spinner from 'ui/Spinner';
import { SearchBar } from 'ui/SearchBar';
import { SiteTemplate } from 'ui/SiteTemplate';

import pick from 'utils/pick';
import { useToggle } from 'utils/hooks';
import { useFilters, mergeFilters, useQueryFilters } from 'utils/hooks/search';

import SearchResults from './SearchResults';
import FiltersDialog from './SiteFilters/FiltersDialog';
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

  React.useEffect(() => {
    queryFilters.replace(search.state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search.state]);

  const [isFiltering, toggleFilters] = useToggle();

  const currentFilters = pick(search.state, [
    'country',
    'language',
    'fundingType',
    'academicLevel',
  ]);

  return (
    <SiteTemplate
      searchBar={
        <SearchBar defaultValue={search.state.term} onSubmit={search.setTerm} />
      }
    >
      <div className="h-full flex-1">
        <div className="container mx-auto flex xl:px-8">
          <aside className="hidden lg:block lg:mx-4 xl:mx-0 self-start w-64">
            <h2 className="mb-5 text-base">Filtrar búsqueda</h2>
            <SiteFilters
              values={currentFilters}
              onReset={search.reset}
              onSubmit={search.setFilters}
            />
          </aside>

          <div className="flex-1 max-w-screen-md mx-auto">
            <React.Suspense
              fallback={
                <div className="text-center mt-4">
                  <Spinner />
                </div>
              }
            >
              <SearchResults onPage={search.setPage} searchUrl={searchUrl} />
            </React.Suspense>
          </div>
        </div>

        <FiltersDialog isOpen={isFiltering} onDismiss={toggleFilters}>
          <SiteFilters
            values={currentFilters}
            onReset={values => {
              toggleFilters();
              search.reset(values);
            }}
            onSubmit={values => {
              toggleFilters();
              search.setFilters(values);
            }}
          />
        </FiltersDialog>
      </div>
    </SiteTemplate>
  );
}

export default SearchPage;
