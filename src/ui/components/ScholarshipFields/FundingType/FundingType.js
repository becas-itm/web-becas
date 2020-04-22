import React from 'react';
import { Field } from '../Field';
import { Money } from 'ui/components/Icon';
import { getFundingType } from './getFundingType';

export function FundingType({ value, children }) {
  return (
    <Field
      icon={<Money />}
      name="Financiamiento"
      isMissing={!value && !children}
    >
      {children || (value && <p>{getFundingType(value)}</p>)}
    </Field>
  );
}
