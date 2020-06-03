import React from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';

import Input from 'ui/Input';
import Button from 'ui/Button';
import { FastField } from 'ui/formik';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Correo electrónico no válido')
    .required('Ingresa tu correo'),
});

export function RecoverForm({ onSubmit, isLoading }) {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
    >
      <Form noValidate>
        <div className="block">
          <FastField
            label={<label htmlFor="inputEmail">Correo electrónico</label>}
            name="email"
          >
            <Input
              type="email"
              id="inputEmail"
              placeholder="ejemplo@itm.edu.co"
              disabled={isLoading}
            />
          </FastField>
        </div>

        <Button isLoading={isLoading} type="submit" className="mt-8">
          Continuar
        </Button>
      </Form>
    </Formik>
  );
}
