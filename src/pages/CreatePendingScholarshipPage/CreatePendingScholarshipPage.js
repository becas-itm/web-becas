import React from 'react';
import { Formik, Form } from 'formik';
import Button, { COLOR } from 'ui/components/Button';
import AdminTemplate from 'ui/templates/AdminTemplate';
import { useCreate } from './useCreate';
import {
  NameEditable,
  DescriptionEditable,
  DeadlineEditable,
  FundingTypeEditable,
  CountryEditable,
  AcademicLevelEditable,
  FormikField,
  LanguageEditable,
} from 'ui/components/ScholarshipFields';

export default function CreatePendingScholarshipPage() {
  const { create, isCreating } = useCreate();

  const handleSubmit = values => {
    create({
      ...values,
      country: values.country?.code,
    }).then(console.log('Aceptado'));
  };

  return (
    <AdminTemplate>
      <main
        style={{ maxWidth: 840 }}
        className="max-w-screen-md mx-auto p-4 bg-white shadow md:rounded  sm:py-10 md:py-16 my-8"
      >
        <div className="relative max-w-xl mx-auto">
          <Formik
            onSubmit={handleSubmit}
            initialValues={{
              name: '',
              description: '',
              deadline: '',
              academicLevel: '*',
              fundingType: '*',
              country: '*',
              language: '',
            }}
          >
            <Form noValidate>
              <h1 className="text-xl sm:text-2xl font-semibold mb-4">
                Nueva convocatoria
              </h1>

              <div className="mb-2">
                <FormikField name="name">
                  <NameEditable />
                </FormikField>
              </div>

              <div className="mt-4">
                <FormikField name="description">
                  <DescriptionEditable rows={6} />
                </FormikField>
              </div>

              <div className="mt-4">
                <FormikField name="deadline">
                  <DeadlineEditable />
                </FormikField>
              </div>

              <div className="mt-4">
                <FormikField name="academicLevel">
                  <AcademicLevelEditable />
                </FormikField>
              </div>

              <div className="mt-4">
                <FormikField name="fundingType">
                  <FundingTypeEditable />
                </FormikField>
              </div>

              <div className="mt-4">
                <FormikField name="language">
                  <LanguageEditable />
                </FormikField>
              </div>

              <div className="mt-4">
                <FormikField name="country">
                  <CountryEditable />
                </FormikField>
              </div>

              <div className="flex justify-end mt-8">
                <Button color={COLOR.secondary} disabled={isCreating}>
                  Cancelar
                </Button>
                <Button type="submit" className="ml-3" isLoading={isCreating}>
                  Guardar
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
      </main>
    </AdminTemplate>
  );
}
