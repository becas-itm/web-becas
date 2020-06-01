import React from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';

import { Warning } from 'ui/Icon';
import { useSnackbar } from 'ui/Snackbar';
import Button, { COLOR } from 'ui/Button';
import GoBackButton from 'ui/GoBackButton';
import AdminTemplate from 'ui/templates/AdminTemplate';

import { BasicInfoSection, LocalizationSection } from '../ScholarshipPage';

import { useCreate } from './useCreate';

const scholarshipSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  deadline: yup.string().required(),
  academicLevel: yup.string().required(),
  fundingType: yup.string().required(),
  country: yup.string().required(),
  language: yup.string().required(),
});

const initialFormValues = {
  name: '',
  description: '',
  deadline: '',
  fundingType: '',
  academicLevel: '',
  language: '',
  country: null,
};

function CreateScholarshipPage() {
  const snack = useSnackbar();
  const history = useHistory();

  const { createScholarship } = useCreate();

  const handleSubmit = form =>
    createScholarship(form)
      .then(({ id }) => history.push(`/convocatorias/${id}`))
      .then(snack.show('Convocatoria creada.'));

  return (
    <AdminTemplate>
      <div className="mx-auto max-w-4xl pb-8">
        <header className="flex items-center my-2 lg:my-4 px-2 lg:px-0">
          <GoBackButton data-testid="goBack" />
          <h1 className="text-xl pl-2">Nueva convocatoria</h1>
        </header>

        <Formik
          onSubmit={handleSubmit}
          initialValues={initialFormValues}
          validationSchema={scholarshipSchema}
        >
          {({ isValid }) => (
            <Form noValidate>
              <BasicInfoSection />

              <LocalizationSection />

              <div className="pt-6 px-4 lg:px-0 border-t mt-8">
                {!isValid && (
                  <div className="flex items-center justify-end mb-6">
                    <Warning
                      small
                      style={{ color: '#FAC809' }}
                      className="mr-2"
                    />
                    <span className="text-sm text-yellow-600 font-semibold">
                      Completa todos los campos antes de continuar
                    </span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row-reverse sm:items-center ">
                  <Button
                    disabled={!isValid}
                    type="submit"
                    data-testid="create"
                  >
                    Guardar
                  </Button>

                  <Button
                    color={COLOR.secondary}
                    type="reset"
                    className="mt-3 sm:mt-0 sm:mr-3"
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </AdminTemplate>
  );
}

export default CreateScholarshipPage;
