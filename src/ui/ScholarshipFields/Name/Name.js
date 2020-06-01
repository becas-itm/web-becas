import React from 'react';
import { Field } from '../Field';

export function Name({ value, children }) {
  return (
    <Field name="Nombre" isMissing={!value && !children}>
      {children ||
        (value && (
          <h1 className="text-xl sm:text-2xl font-semibold">{value}</h1>
        ))}
    </Field>
  );
}
