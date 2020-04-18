import React from 'react';
import propTypes from 'prop-types';
import { Search, Close } from 'ui/components/Icon';
import { SearchBarButton } from './SearchBarButton';

function SearchBar({
  endIcon,
  onChange,
  isLarge = false,
  clearable = true,
  defaultValue = '',
  placeholder = 'Buscar',
}) {
  const inputRef = React.useRef(null);
  const [value, setValue] = React.useState(defaultValue);

  const handleFormSubmit = event => {
    event.preventDefault();
    if (onChange) {
      onChange(value);
    }
  };

  const handleInputChange = event => setValue(event.target.value);

  const handleInputKeyDown = event => {
    if (event.key === 'Escape') {
      setValue('');
    }
  };

  const handleClearClick = event => {
    event.preventDefault();
    event.stopPropagation();
    setValue('');
    inputRef.current.focus();
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      data-testid="SearchBar"
      className={`w-full bg-white rounded flex items-stretch ${
        isLarge ? 'py-1 shadow-lg' : 'shadow'
      }`}
    >
      <SearchBarButton
        icon={Search}
        type="submit"
        data-testid="SearchBar__startButton"
      >
        Buscar
      </SearchBarButton>

      <input
        value={value}
        ref={inputRef}
        placeholder={placeholder}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        data-testid="SearchBar__input"
        className={`w-full focus:outline-none bg-transparent ${
          isLarge ? 'text-xl' : 'text-base'
        }`}
      />

      {value && clearable && (
        <div className="flex-shrink-0 px-3 flex items-center">
          <button
            type="button"
            onClick={handleClearClick}
            className="text-disabled hover:text-medium focus:text-medium"
            data-testid="SearchBar__clearButton"
          >
            <Close />
            <span className="sr-only">Limpiar búsqueda</span>
          </button>
        </div>
      )}

      {endIcon &&
        React.cloneElement(endIcon, {
          'data-testid': 'SearchBar__endButton',
        })}
    </form>
  );
}

SearchBar.propTypes = {
  isLarge: propTypes.bool,
  clearable: propTypes.bool,
  onChange: propTypes.func,
  endIcon: propTypes.element,
  defaultValue: propTypes.string,
};

export default SearchBar;
