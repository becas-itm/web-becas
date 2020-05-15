import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

import FundingTypeListbox from './index';

export default {
  title: 'FundingTypeListbox',
  component: FundingTypeListbox,
};

export const normal = () => (
  <Formik initialValues={{ funding: '' }}>
    {({ values }) => (
      <Form noValidate className="m-4">
        <FundingTypeListbox name="funding" />
        <pre className="rounded p-4 bg-gray-100 mt-6">
          {JSON.stringify(values, null, 2)}
        </pre>
      </Form>
    )}
  </Formik>
);

export const initialValues = () => (
  <Formik initialValues={{ funding: 'COMPLETE' }}>
    {({ values }) => (
      <Form noValidate className="m-4">
        <FundingTypeListbox name="funding" />
        <pre className="rounded p-4 bg-gray-100 mt-6">
          {JSON.stringify(values, null, 2)}
        </pre>
      </Form>
    )}
  </Formik>
);

export const withValidation = () => (
  <Formik
    initialValues={{ funding: '' }}
    validationSchema={yup.object().shape({
      funding: yup.string().required('Selecciona un financiamiento.'),
    })}
  >
    {({ values }) => (
      <Form noValidate className="m-4">
        <FundingTypeListbox name="funding" />

        <Field name="funding">
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
