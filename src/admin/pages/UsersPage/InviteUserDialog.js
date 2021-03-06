import React from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { useMutation } from 'react-query';

import api from 'utils/api';
import Input from 'ui/Input';
import { FastField } from 'ui/formik';
import Button, { COLOR } from 'ui/Button';
import GenderAvatarPicker from 'ui/GenderAvatarPicker';
import Dialog, { Title, Actions, CloseBtn } from 'ui/Dialog';

const validationSchema = yup.object().shape({
  displayName: yup
    .string()
    .max(25, 'El nombre debe ser menor o igual a 25 carácteres')
    .required('Ingresa su nombre'),
  email: yup
    .string()
    .email('Correo electrónico no válido')
    .required('Ingresa su correo'),
});

function useInviteUser() {
  const [invite, result] = useMutation(data => api.post('/users/', data));
  return {
    invite,
    isLoading: result.status === 'loading',
  };
}

export function InviteUserDialog({ isOpen, onCancel, onInvite }) {
  const { invite, isLoading } = useInviteUser();
  const handleDismiss = isLoading ? () => {} : onCancel;

  const handleInvite = user => invite(user).then(onInvite);

  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={handleDismiss}
      aria-labelledby="invite-user"
      className="w-full max-w-sm"
    >
      <CloseBtn onClick={handleDismiss} />

      <Title id="invite-user">Invitar usuario</Title>

      <Formik
        onSubmit={handleInvite}
        validationSchema={validationSchema}
        initialValues={{ displayName: '', email: '', gender: '' }}
      >
        {({ values, setFieldValue }) => (
          <Form noValidate>
            <div className="mb-4">
              <div className="text-base mb-1">Avatar</div>
              <GenderAvatarPicker
                gender={values.gender}
                onGender={gender => setFieldValue('gender', gender)}
              />
            </div>

            <div className="mb-4">
              <FastField label="Nombre" name="displayName">
                <Input disabled={isLoading} placeholder="John Doe" />
              </FastField>
            </div>

            <div className="mb-6">
              <FastField label="Correo electrónico" name="email">
                <Input
                  type="email"
                  disabled={isLoading}
                  placeholder="ejemplo@itm.edu.co"
                />
              </FastField>
            </div>

            <Actions className="mt-6">
              <Button
                onClick={onCancel}
                color={COLOR.secondary}
                disabled={isLoading}
              >
                Cancelar
              </Button>
              <Button isLoading={isLoading} type="submit">
                Invitar
              </Button>
            </Actions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
}
