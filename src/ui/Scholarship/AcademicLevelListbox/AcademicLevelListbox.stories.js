import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

import AcademicLevelListbox from './index';

export default {
  title: 'Scholarship / AcademicLevelListbox',
  component: AcademicLevelListbox,
};

export const normal = () => (
  <Formik initialValues={{ level: '' }}>
    {({ values }) => (
      <Form noValidate className="m-4">
        <AcademicLevelListbox name="level" />
        <pre className="rounded p-4 bg-gray-100 mt-6">
          {JSON.stringify(values, null, 2)}
        </pre>
      </Form>
    )}
  </Formik>
);

export const initialValues = () => (
  <Formik initialValues={{ level: 'POSTGRADUATE' }}>
    {({ values }) => (
      <Form noValidate className="m-4">
        <AcademicLevelListbox name="level" />
        <pre className="rounded p-4 bg-gray-100 mt-6">
          {JSON.stringify(values, null, 2)}
        </pre>
      </Form>
    )}
  </Formik>
);

export const withValidation = () => (
  <Formik
    initialValues={{ level: '' }}
    validationSchema={yup.object().shape({
      level: yup.string().required('Selecciona un nivel.'),
    })}
  >
    {({ values }) => (
      <Form noValidate className="m-4">
        <AcademicLevelListbox name="level" />

        <Field name="level">
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
