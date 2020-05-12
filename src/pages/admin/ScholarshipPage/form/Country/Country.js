import React from 'react';
import { ComboboxInput, ComboboxPopover } from 'ui/components/Combobox';
import Combobox, { CountryComboboxMenu } from 'ui/components/CountryCombobox';

function Country({ value, onChange, ...restProps }) {
  const handleSelect = selected => {
    if (onChange) {
      onChange(selected);
    }
  };

  return (
    <Combobox selectedItem={value} onSelect={handleSelect}>
      <ComboboxInput placeholder="Buscar" {...restProps} />
      <ComboboxPopover>
        <CountryComboboxMenu />
      </ComboboxPopover>
    </Combobox>
  );
}

export default Country;
