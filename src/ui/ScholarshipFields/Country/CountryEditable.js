import React from 'react';
import { ComboboxInput, ComboboxPopover } from 'ui/Combobox';
import Combobox, { CountryComboboxMenu } from 'ui/CountryCombobox';

import { Country } from './Country';

export function CountryEditable({ value, onChange }) {
  const handleSelect = selected => onChange(selected);

  return (
    <Country {...value}>
      <div className="mt-2">
        <Combobox selectedItem={value} onSelect={handleSelect}>
          <ComboboxInput placeholder="Buscar" />
          <ComboboxPopover>
            <CountryComboboxMenu />
          </ComboboxPopover>
        </Combobox>
      </div>
    </Country>
  );
}
