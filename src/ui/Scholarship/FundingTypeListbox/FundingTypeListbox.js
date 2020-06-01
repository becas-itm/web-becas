import React from 'react';
import { Listbox, ListboxOption } from 'ui/Listbox';
import { FUNDINGS } from './constants';

function FundingTypeListbox({ value, onChange, ...restProps }) {
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

  const handleChange = newValue => {
    if (onChange) {
      onChange(newValue === '*' ? '' : newValue);
    }
  };

  return (
    <Listbox value={value} onChange={handleChange} {...restProps}>
      {[
        { label: 'Seleccionar', value: '*' },
        { label: 'Total', value: FUNDINGS.COMPLETE },
        { label: 'Parcial', value: FUNDINGS.PARTIAL },
      ].map(funding => (
        <ListboxOption key={funding.value} value={funding.value}>
          {funding.label}
        </ListboxOption>
      ))}
    </Listbox>
  );
}

export default FundingTypeListbox;
