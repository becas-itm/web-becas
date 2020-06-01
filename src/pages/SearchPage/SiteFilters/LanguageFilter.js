import React from 'react';
import CountryFlag from 'ui/CountryFlag';
import { Listbox, ListboxOption } from 'ui/Listbox';

export default function LanguageFilter({ value, onChange }) {
  if (!value) {
    value = '*';
  }

  return (
    <Listbox
      value={value}
      onChange={onChange}
      aria-labelledby="filter-language"
      className="w-full"
    >
      <ListboxOption value="*">Cualquiera</ListboxOption>
      <ListboxOption value="es">
        <CountryFlag code="ESP" className="mr-2" />
        <span>Español</span>
      </ListboxOption>
      <ListboxOption value="en">
        <CountryFlag code="USA" className="mr-2" />
        <span>Inglés</span>
      </ListboxOption>
    </Listbox>
  );
}
