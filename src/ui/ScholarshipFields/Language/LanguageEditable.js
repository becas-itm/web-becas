import React from 'react';
import CountryFlag from 'ui/CountryFlag';
import { Listbox, ListboxOption } from 'ui/Listbox';

import { Language } from './Language';
import { LANGUAGES } from './constants';
import { getLanguageName } from './getLanguageName';

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
        <ListboxOption value="*">Seleccionar</ListboxOption>
        <ListboxOption value={LANGUAGES.SPANISH}>
          <CountryFlag code="ESP" className="mr-2" />
          <span>{getLanguageName(LANGUAGES.SPANISH)}</span>
        </ListboxOption>
        <ListboxOption value={LANGUAGES.ENGLISH}>
          <CountryFlag code="USA" className="mr-2" />
          <span>{getLanguageName(LANGUAGES.ENGLISH)}</span>
        </ListboxOption>
      </Listbox>
    </Language>
  );
}
