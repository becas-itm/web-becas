import React from 'react';
import { Event } from 'ui/components/Icon';

import { Field } from '../Field';
import { formatDeadline } from './formatDeadline';

export function Deadline({ value, children }) {
  return (
    <Field
      icon={<Event />}
      name="Abierta hasta"
      isMissing={!value && !children}
    >
      {children || (value && <p>{formatDeadline(value)}</p>)}
    </Field>
  );
}
