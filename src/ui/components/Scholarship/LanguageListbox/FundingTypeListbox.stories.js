import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

import LanguageListbox from './index';

export default {
  title: 'Scholarship / LanguageListbox',
  component: LanguageListbox,
};

export const normal = () => (
  <Formik initialValues={{ lang: '' }}>
    {({ values }) => (
      <Form noValidate className="m-4">
        <LanguageListbox name="lang" />
        <pre className="rounded p-4 bg-gray-100 mt-6">
          {JSON.stringify(values, null, 2)}
        </pre>
      </Form>
    )}
  </Formik>
);

export const initialValues = () => (
  <Formik initialValues={{ lang: 'es' }}>
    {({ values }) => (
      <Form noValidate className="m-4">
        <LanguageListbox name="lang" />
        <pre className="rounded p-4 bg-gray-100 mt-6">
          {JSON.stringify(values, null, 2)}
        </pre>
      </Form>
    )}
  </Formik>
);

export const withValidation = () => (
  <Formik
    initialValues={{ lang: '' }}
    validationSchema={yup.object().shape({
      lang: yup.string().required('Selecciona un idioma.'),
    })}
  >
    {({ values }) => (
      <Form noValidate className="m-4">
        <LanguageListbox name="lang" />

        <Field name="lang">
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
