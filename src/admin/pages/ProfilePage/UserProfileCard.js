import React from 'react';
import * as yup from 'yup';
import { Formik, Form, FastField as BaseFastField } from 'formik';

import Input from 'ui/Input';
import { FastField } from 'ui/formik';
import Button, { COLOR } from 'ui/Button';
import { Title, Actions } from 'ui/Dialog';
import GenderAvatarPicker from 'ui/GenderAvatarPicker';

const validationSchema = yup.object().shape({
  displayName: yup
    .string()
    .max(25, 'El nombre debe ser menor o igual a 25 carácteres')
    .required('Ingresa tu nombre'),
  password: yup
    .string()
    .min(6, 'Ingresa como mínimo 6 carácteres')
    .max(100, 'La contraseña debe ser menor o igual a 100 carácteres'),
});

export function UserProfileCard({ user, onEdit, isLoading }) {
  return (
    <div className="bg-white shadow p-8 rounded">
      <Title>Perfil</Title>

      <Formik
        onSubmit={onEdit}
        validationSchema={validationSchema}
        initialValues={{
          password: '',
          gender: user.gender || '',
          displayName: user.displayName || '',
        }}
      >
        <Form noValidate>
          <div className="block mb-4">
            <div className="block text-base mb-1">Avatar</div>
            <BaseFastField name="gender">
              {({ field, form }) => (
                <GenderAvatarPicker
                  gender={field.value}
                  onGender={gender => form.setFieldValue(field.name, gender)}
                />
              )}
            </BaseFastField>
          </div>

          <div className="mb-4">
            <FastField label="Nombre" name="displayName">
              <Input disabled={isLoading} placeholder="John Doe" />
            </FastField>
          </div>

          <div className="block mb-4 opacity-50 cursor-not-allowed">
            <FastField label="Correo electrónico" name="email">
              <Input
                readOnly
                disabled
                type="email"
                defaultValue={user.email || ''}
                className="cursor-not-allowed"
              />
            </FastField>
          </div>

          <div className="mb-4">
            <FastField label="Contraseña" name="password">
              <Input
                disabled={isLoading}
                type="password"
                placeholder="Sin cambiar"
              />
            </FastField>
          </div>

          <Actions className="mt-6">
            <Button color={COLOR.secondary} disabled={isLoading} type="reset">
              Restablecer
            </Button>
            <Button isLoading={isLoading} type="submit">
              Actualizar
            </Button>
          </Actions>
        </Form>
      </Formik>
    </div>
  );
}
