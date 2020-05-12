import React from 'react';
import CountryFlag from 'ui/components/CountryFlag';
import { Listbox, ListboxOption } from 'ui/components/Listbox';

import { LANGUAGES } from './constants';
import { getLanguageName } from './getLanguageName';

function Language({ value, onChange, ...restProps }) {
  if (!value) {
    value = '*';
  }

  const handleChange = lang => {
    if (onChange) {
      onChange(lang === '*' ? '' : lang);
    }
  };

  return (
    <Listbox value={value} onChange={handleChange} {...restProps}>
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
  );
}

export default Language;
