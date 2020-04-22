import React from 'react';
import { Field } from '../Field';

export function Description({ value, children }) {
  return (
    <Field name="Descripción" isMissing={!value && !children}>
      {children || (value && <p>{value}</p>)}
    </Field>
  );
}
