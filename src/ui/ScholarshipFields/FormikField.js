import React from 'react';
import { FastField } from 'formik';

export function FormikField({ name, children }) {
  return (
    <FastField name={name}>
      {({ field, form }) =>
        React.cloneElement(children, {
          value: field.value,
          onChange: value => form.setFieldValue(field.name, value),
        })
      }
    </FastField>
  );
}
