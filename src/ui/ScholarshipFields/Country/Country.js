import React from 'react';
import CountryFlag from 'ui/CountryFlag';
import { Field } from '../Field';

export function Country({ name, code, children }) {
  return (
    <Field
      name="País"
      isMissing={!name && !code && !children}
      icon={
        <CountryFlag
          code={code || 'OTH'}
          style={{ width: 24, height: 24 }}
          className="shadow-outline rounded-full object-cover mr-1"
        />
      }
    >
      {children || <p>{name || 'Otros'}</p>}
    </Field>
  );
}
