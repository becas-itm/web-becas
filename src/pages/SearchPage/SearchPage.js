import React from 'react';

import { Tune } from 'ui/components/Icon';
import Spinner from 'ui/components/Spinner';
import { SiteTemplate } from 'ui/templates/SiteTemplate';
import SearchBar, { SearchBarButton } from 'ui/components/SearchBar';

import { useToggle } from 'utils/hooks';
import { useSearchPage } from 'utils/hooks/search';

import SearchResults from './SearchResults';
import FiltersDialog from './SiteFilters/FiltersDialog';
import SiteFilters, { DEFAULT_FILTERS } from './SiteFilters/SiteFilters';

function SearchPage() {
  const url = '/api/search/scholarships/';
  const { search, filter } = useSearchPage(url, DEFAULT_FILTERS);

  const [isFiltering, toggleFilters] = useToggle();

  return (
    <SiteTemplate
      searchBar={
        <SearchBar
          onChange={filter.setTerm}
          defaultValue={filter.filters.term}
          endIcon={
            <div className="lg:hidden">
              <SearchBarButton onClick={toggleFilters} icon={Tune}>
                Abrir filtros
              </SearchBarButton>
            </div>
          }
        />
      }
    >
      <div className="h-full flex-1">
        <div className="container mx-auto flex xl:px-8">
          <aside className="hidden lg:block lg:mx-4 xl:mx-0 self-start w-64">
            <h2 className="mb-5 text-base">Filtrar búsqueda</h2>
            <SiteFilters
              filters={filter.filters}
              onSubmit={filter.setFilters}
              onReset={filter.reset}
            />
          </aside>
          <div className="flex-1 max-w-screen-md mx-auto">
            {search.isLoading ? (
              <div className="text-center mt-4">
                <Spinner />
              </div>
            ) : (
              <SearchResults
                onPage={filter.setPage}
                results={search.results}
                onResetFilters={filter.reset}
              />
            )}
          </div>
        </div>
        <FiltersDialog isOpen={isFiltering} onDismiss={toggleFilters}>
          <SiteFilters
            filters={filter.filters}
            onSubmit={filter.setFilters}
            onReset={filter.reset}
          />
        </FiltersDialog>
      </div>
    </SiteTemplate>
  );
}

export default SearchPage;
