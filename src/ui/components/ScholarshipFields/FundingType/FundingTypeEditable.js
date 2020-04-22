import React from 'react';
import { Listbox, ListboxOption } from 'ui/components/Listbox';

import { FUNDINGS } from './constants';
import { FundingType } from './FundingType';

export function FundingTypeEditable({ value, onChange }) {
  if (!value) {
    value = '*';
  }

  const handleChange = newValue => {
    onChange(newValue === '*' ? '' : newValue);
  };

  return (
    <FundingType>
      <Listbox value={value} onChange={handleChange} className="mt-2">
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
    </FundingType>
  );
}
