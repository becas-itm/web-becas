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

export function ResetForm({ user, onSubmit, isLoading }) {
  const { gender, displayName } = user;
  return (
    <AuthCard>
      <Formik
        onSubmit={onSubmit}
        initialValues={{ password: '' }}
        validationSchema={validationSchema}
      >
        <Form noValidate>
          <div className="flex items-start mb-6">
            <GenderAvatar
              size={48}
              gender={gender}
              className="shadow-outline mr-4 flex-shrink-0"
            />

            <div>
              <h2 className="text-lg font-semibold">{displayName}</h2>
              <p className="text-medium">Usuario</p>
            </div>
          </div>

          <FastField
            name="password"
            label={<label htmlFor="inputPassword">Contraseña</label>}
          >
            <Input
              disabled={isLoading}
              type="password"
              id="inputPassword"
              placeholder="Contraseña"
            />
          </FastField>

          <Button isLoading={isLoading} type="submit" className="block mt-8">
            Restablecer
          </Button>
        </Form>
      </Formik>
    </AuthCard>
  );
}
