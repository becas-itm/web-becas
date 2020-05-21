import React from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';

import Input from 'ui/components/Input';
import { FastField } from 'ui/components/formik';
import Button, { COLOR } from 'ui/components/Button';

const validationSchema = yup.object().shape({
  name: yup.string().required('Campo requerido'),
  website: yup.string().url('URL no válida').required('Campo requerido'),
});

export function EntityForm({ entity, onSubmit, onCancel, isLoading = false }) {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={entity}
      validationSchema={validationSchema}
    >
      {({ isValid }) => (
        <Form data-testid="EntityForm" noValidate>
          <div className="mb-4">
            <FastField label="Nombre" name="name">
              <Input
                disabled={isLoading}
                placeholder="Becas ejemplo"
                data-testid="EntityForm__name"
              />
            </FastField>
          </div>

          <FastField label="Sitio web" name="website">
            <Input
              disabled={isLoading}
              type="text"
              placeholder="http://ejemplo.com"
              data-testid="EntityForm__website"
            />
          </FastField>

          <div className="flex justify-end mt-6">
            <Button
              onClick={onCancel}
              disabled={isLoading}
              color={COLOR.secondary}
              type="reset"
              className="mr-3"
            >
              Cancelar
            </Button>
            <Button
              disabled={!isValid}
              isLoading={isLoading}
              type="submit"
              data-testid="EntityForm__submitButton"
            >
              Guardar
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

EntityForm.defaultProps = {
  entity: { name: '', website: '' },
};
