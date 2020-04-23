import React from 'react';
import { Formik, Form } from 'formik';

import {
  Entity,
  FormikField,
  NameEditable,
  CountryEditable,
  DeadlineEditable,
  DescriptionEditable,
  AcademicLevelEditable,
  FundingTypeEditable,
  LanguageEditable,
} from 'ui/components/ScholarshipFields';

import Button, { COLOR } from 'ui/components/Button';
import { ScholarshipDetails } from 'pages/ScholarshipPage/ScholarshipDetails';

import { useUpdate } from './useScholarship';

export default function EditableScholarship({ scholarship, onEdit, onCancel }) {
  const initialValues = {
    name: scholarship.name || '',
    description: scholarship.description || '',
    deadline: scholarship.deadline || '',
    academicLevel: scholarship.academicLevel || '',
    fundingType: scholarship.fundingType || '',
    country: scholarship.country || {},
    language: scholarship.language || '',
  };

  const { update, isUpdating } = useUpdate(scholarship.id);

  const handleSubmit = values =>
    update({
      ...values,
      country: values.country?.code,
    }).then(onEdit);

  return (
    <div className="relative max-w-xl mx-auto">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form noValidate>
          <h1 className="text-xl sm:text-2xl font-semibold mb-4">
            Actualizar convocatoria
          </h1>

          <div className="mb-2">
            <FormikField name="name">
              <NameEditable />
            </FormikField>
          </div>

          <FormikField name="description">
            <DescriptionEditable rows="6" />
          </FormikField>

          <div className="mt-6">
            <FormikField name="deadline">
              <DeadlineEditable />
            </FormikField>

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
          </div>

          <div className="pl-8 -ml-8 mt-8">
            <Entity
              name={scholarship.entity.name}
              fullName={scholarship.entity.fullName}
            />
          </div>

          <ScholarshipDetails
            {...scholarship.sourceDetails}
            entityName={scholarship.entity?.name}
          />

          <div className="flex justify-end mt-6">
            <Button
              disabled={isUpdating}
              color={COLOR.secondary}
              onClick={onCancel}
            >
              Cancelar
            </Button>

            <Button isLoading={isUpdating} type="submit" className="ml-3">
              Actualizar
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
