import React from 'react';
import { Listbox, ListboxOption } from 'ui/components/Listbox';
import { LEVELS } from './constants';

function AcademicLevel({ value, onChange, ...restProps }) {
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
  );
}

export default AcademicLevel;
