import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

import CountryCombobox from './index';

export default {
  title: 'CountryCombobox',
  component: CountryCombobox,
};

export const normal = () => (
  <Formik initialValues={{ country: null }}>
    <Form noValidate>
      <CountryCombobox name="country" />
    </Form>
  </Formik>
);

export const initialValues = () => (
  <Formik initialValues={{ country: { code: 'COL', name: 'Colombia' } }}>
    <Form noValidate>
      <CountryCombobox name="country" />
    </Form>
  </Formik>
);

export const withValidation = () => (
  <Formik
    initialValues={{ country: null }}
    validationSchema={yup.object().shape({
      country: yup.mixed().required('Escoge un país'),
    })}
  >
    {({ values }) => (
      <Form noValidate className="m-8">
        <CountryCombobox name="country" />

        <Field name="country">
          {({ meta }) =>
            meta.error ? (
              <div className="rounded bg-red-50 text-red-600 border border-red-300 p-2 my-4">
                {meta.error}
              </div>
            ) : null
          }
        </Field>

        <button type="submit" className="mt-4 font-semibold">
          SUBMIT
        </button>

        <pre className="rounded p-4 bg-gray-100 mt-6">
          {JSON.stringify(values, null, 2)}
        </pre>
      </Form>
    )}
  </Formik>
);
