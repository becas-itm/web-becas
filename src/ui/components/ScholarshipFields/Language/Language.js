import React from 'react';
import { Translate } from 'ui/components/Icon';
import { Field } from '../Field';

export function Language({ value, children }) {
  return (
    <Field name="Idioma" isMissing={!value && !children} icon={<Translate />}>
      {children || (value && <p>{value}</p>)}
    </Field>
  );
}
