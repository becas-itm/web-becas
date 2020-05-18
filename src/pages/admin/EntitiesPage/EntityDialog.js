import React from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { useMutation } from 'react-query';

import { post } from 'utils/api';
import Input from 'ui/components/Input';
import { FastField } from 'ui/components/formik';
import Button, { COLOR } from 'ui/components/Button';
import Dialog, { Title, Actions, CloseBtn } from 'ui/components/Dialog';

const validationSchema = yup.object().shape({
  name: yup.string().required('Ingresa su nombre'),
  website: yup.string().url('URL no válida').required('Ingresa su URL'),
});

function useCreateEntity() {
  const [create, result] = useMutation(data => post('/api/entities/', data));
  return {
    create,
    isLoading: result.status === 'loading',
  };
}

export function InviteUserDialog({ isOpen, onCancel, onInvite }) {
  const { create, isLoading } = useCreateEntity();
  const handleDismiss = isLoading ? () => {} : onCancel;

  const handleCreate = entity => create(entity).then(onInvite);

  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={handleDismiss}
      aria-labelledby="create-entity"
      className="w-full max-w-sm"
    >
      <CloseBtn onClick={handleDismiss} />

      <Title id="create-entity">Crear entidad</Title>

      <Formik
        onSubmit={handleCreate}
        validationSchema={validationSchema}
        initialValues={{ name: '', website: '' }}
      >
        <Form noValidate>
          <div className="mb-4">
            <FastField label="Nombre" name="name">
              <Input disabled={isLoading} placeholder="Becas ejemplo" />
            </FastField>
          </div>

          <div className="mb-6">
            <FastField label="Sitio web" name="website">
              <Input
                type="text"
                disabled={isLoading}
                placeholder="http://ejemplo.com"
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
              Crear
            </Button>
          </Actions>
        </Form>
      </Formik>
    </Dialog>
  );
}
