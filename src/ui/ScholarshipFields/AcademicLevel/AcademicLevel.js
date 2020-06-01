import React from 'react';
import { School } from 'ui/Icon';

import { Field } from '../Field';
import { getAcademicLevel } from './getAcademicLevel';

export function AcademicLevel({ value, children }) {
  return (
    <Field
      name="Tipo de beca"
      icon={<School />}
      isMissing={!value && !children}
    >
      {children || <p>{getAcademicLevel(value)}</p>}
    </Field>
  );
}
