import React from 'react';
import CountryFlag from 'ui/components/CountryFlag';
import { Listbox, ListboxOption } from 'ui/components/Listbox';

import { Language } from './Language';
import { LANGUAGES } from './constants';

export function LanguageEditable({ value, onChange }) {
  if (!value) {
    value = '*';
  }

  const handleChange = lang => onChange(lang === '*' ? '' : lang);

  return (
    <Language>
      <Listbox
        value={value}
        onChange={handleChange}
        aria-labelledby="filter-language"
        className="w-full mt-2"
      >
        <ListboxOption value="*">Cualquiera</ListboxOption>
        <ListboxOption value={LANGUAGES.SPANISH}>
          <CountryFlag code="ESP" className="mr-2" />
          <span>Español</span>
        </ListboxOption>
        <ListboxOption value={LANGUAGES.ENGLISH}>
          <CountryFlag code="USA" className="mr-2" />
          <span>Inglés</span>
        </ListboxOption>
      </Listbox>
    </Language>
  );
}
