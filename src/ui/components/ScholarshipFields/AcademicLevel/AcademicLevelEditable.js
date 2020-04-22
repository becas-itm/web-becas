import React from 'react';
import { Listbox, ListboxOption } from 'ui/components/Listbox';

import { LEVELS } from './constants';
import { AcademicLevel } from './AcademicLevel';

export function AcademicLevelEditable({ value, onChange }) {
  if (!value) {
    value = '*';
  }

  const handleChange = newValue => {
    onChange(newValue === '*' ? '' : newValue);
  };

  return (
    <AcademicLevel>
      <Listbox value={value} onChange={handleChange} className="mt-2">
        {[
          { label: 'Seleccionar', value: '*' },
          { label: 'Pregrado', value: LEVELS.UNDERGRADUATE },
          { label: 'Posgrado', value: LEVELS.POSTGRADUATE },
          { label: 'Pregrado y posgrado', value: LEVELS.BOTH },
          { label: 'Otros', value: LEVELS.OTHERS },
        ].map(option => (
          <ListboxOption key={option.value} value={option.value}>
            {option.label}
          </ListboxOption>
        ))}
      </Listbox>
    </AcademicLevel>
  );
}
