import React from 'react';

const SearchContext = React.createContext();

const useSearch = () => React.useContext(SearchContext);

function SearchProvider({ value, children }) {
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export { SearchContext, useSearch, SearchProvider };
