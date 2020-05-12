import React from 'react';
import { Listbox, ListboxOption } from 'ui/components/Listbox';
import { FUNDINGS } from './constants';

function FundingType({ value, onChange, ...restProps }) {
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

export default FundingType;
