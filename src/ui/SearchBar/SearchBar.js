import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MdSearch } from 'react-icons/md';

import { useSearchBar } from './useSearchBar';
import { ClearButton } from './ClearButton';

export function SearchBar({
  onSubmit,
  placeholder = 'Buscar',
  defaultValue = '',
  isLarge = false,
}) {
  const search = useSearchBar({ defaultValue, onSubmit });

  const [isFocused, setFocused] = React.useState(false);
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <div
      className={classNames(
        'flex bg-white w-full overflow-hidden',
        'transition-shadow duration-150 ease-out',
        isLarge ? 'rounded-lg' : 'rounded',
        isLarge
          ? isFocused
            ? 'shadow'
            : 'shadow-lg'
          : isFocused
          ? 'shadow-sm'
          : 'shadow',
      )}
      data-testid="SearchBar"
    >
      <div
        style={{
          width: isLarge ? 60 : 48,
          height: isLarge ? 60 : 48,
        }}
        className="flex items-center justify-center text-primary flex-shrink-0"
      >
        <MdSearch size={isLarge ? 28 : 24} />
      </div>
      <input
        value={search.value}
        onChange={search.handleChange}
        onKeyDown={search.handleKeyDown}
        ref={search.inputRef}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        data-testid="SearchBar__input"
        className={classNames(
          'outline-none flex-1',
          isLarge ? 'text-lg' : 'text-base',
        )}
      />
      <ClearButton
        isLarge={isLarge}
        isVisible={!!search.value}
        onClick={search.handleClearClick}
      />
    </div>
  );
}

SearchBar.propTypes = {
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  isLarge: PropTypes.bool,
};

export default SearchBar;
