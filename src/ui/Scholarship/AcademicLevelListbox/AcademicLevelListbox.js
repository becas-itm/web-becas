import React from 'react';
import { Listbox, ListboxOption } from 'ui/Listbox';
import { LEVELS } from './constants';

function AcademicLevelListbox({ value, onChange, ...restProps }) {
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

export default AcademicLevelListbox;
