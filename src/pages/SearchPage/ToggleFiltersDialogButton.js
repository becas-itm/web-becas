import React from 'react';
import { useToggle } from 'utils/hooks';
import SiteFilters from './SiteFilters/SiteFilters';
import FiltersDialog from './SiteFilters/FiltersDialog';

export function ToggleFiltersDialogButton() {
  const [isFiltering, toggleFilters] = useToggle();

  return (
    <>
      <button
        type="button"
        onClick={toggleFilters}
        className="text-sm font-semibold text-primary px-3 py-2 uppercase"
      >
        Filtrar
      </button>
      <FiltersDialog isOpen={isFiltering} onDismiss={toggleFilters}>
        <SiteFilters onReset={toggleFilters} onSubmit={toggleFilters} />
      </FiltersDialog>
    </>
  );
}
