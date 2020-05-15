import React from 'react';
import CountryFlag from 'ui/components/CountryFlag';
import { Listbox, ListboxOption } from 'ui/components/Listbox';

import { LANGUAGES } from './constants';
import { getLanguageName } from './getLanguageName';

function LanguageListbox({ value, onChange, ...restProps }) {
  if (restProps.name) {
    // Reach UI shows the inner input when the `name` prop is present.
    // This is an odd behavior because they assume it's an uncontrolled
    // component automatically.
    // We're deleting while we migrate the `@reach/listbox` package.
    delete restProps.name;
  }

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

export default LanguageListbox;
