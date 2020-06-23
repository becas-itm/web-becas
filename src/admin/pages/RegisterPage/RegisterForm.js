import React from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';

import Input from 'ui/Input';
import Button from 'ui/Button';
import { FastField } from 'ui/formik';
import GenderAvatar from 'ui/GenderAvatar';
import { AuthCard } from 'admin/ui/AuthTemplate';

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Ingresa como mínimo 6 carácteres')
    .max(100, 'La contraseña debe ser menor o igual a 100 carácteres')
    .required('Ingresa una contraseña'),
});

export function RegisterForm({ user, token, onSubmit, isLoading }) {
  return (
    <Formik
      validateOnMount
      initialValues={{ password: '' }}
      validationSchema={validationSchema}
      onSubmit={values => onSubmit({ ...values, token })}
    >
      <Form noValidate>
        <AuthCard>
          <div className="flex items-start">
            <GenderAvatar gender={user.gender} className="mr-4" />
            <div>
              <h2 className="text-lg font-semibold">{user.displayName}</h2>
              <p>Usuario</p>
            </div>
          </div>

          <label className="block mt-6">
            <FastField name="password" label="Contraseña">
              <Input
                type="password"
                placeholder="Contraseña"
                data-testid="password"
                disabled={isLoading}
              />
            </FastField>
          </label>

          <Button isLoading={isLoading} type="submit" className="mt-8">
            Registrarme
          </Button>
        </AuthCard>
      </Form>
    </Formik>
  );
}
