import React from 'react';
import { Translate } from 'ui/components/Icon';

import { Field } from '../Field';
import { getLanguageName } from './getLanguageName';

export function Language({ value, children }) {
  return (
    <Field name="Idioma" isMissing={!value && !children} icon={<Translate />}>
      {children || (value && <p>{getLanguageName(value)}</p>)}
    </Field>
  );
}
