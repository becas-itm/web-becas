import React from 'react';
import AppLogo from 'ui/AppLogo';
import { SearchBar } from 'ui/SearchBar';
import { useSearch } from './SearchContext';

export function SearchHeader() {
  const {
    setTerm,
    state: { term },
  } = useSearch();

  return (
    <header className="flex items-center flex-wrap">
      <div className="lg:w-full max-w-xs">
        <AppLogo />
      </div>

      <div className="w-full lg:max-w-sm mt-5 lg:mt-0 order-last lg:order-none">
        <SearchBar
          defaultValue={term}
          onSubmit={setTerm}
          placeholder="Buscar"
        />
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
  );
}
