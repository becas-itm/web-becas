import React from 'react';
import { Field } from 'formik';

import Textarea from 'ui/Textarea';
import DateInput from 'ui/DateInput';
import { Event, Money, School } from 'ui/Icon';

import { FundingTypeListbox, AcademicLevelListbox } from 'ui/Scholarship';

import { FieldMissingWarning } from '../FieldMissingWarning';

export function BasicInfoSection({ fieldsDisabled = false }) {
  return (
    <section className="flex flex-wrap pt-6 px-4 lg:px-0 border-t">
      <div className="mb-6 md:mb-0 md:flex-1">
        <h2 className="text-active font-semibold">Datos básicos</h2>
        <p className="text-sm text-medium mt-1 md:pr-10">
          Información básica acerca de la convocatoria.
        </p>
      </div>

      <div className="w-full md:max-w-lg">
        <div className="flex flex-col md:pl-10">
          <div className="mb-2 flex justify-between">
            <label className="text-sm text-active">Nombre</label>
            <FieldMissingWarning name="name" />
          </div>
          <Field
            name="name"
            as={Textarea}
            disabled={fieldsDisabled}
            data-testid="scholarshipName"
            rows="3"
          />
        </div>

        <div className="flex flex-col mt-6 md:pl-10">
          <div className="mb-2 flex justify-between">
            <label className="text-sm text-active">Descripción</label>
            <FieldMissingWarning name="description" />
          </div>
          <Field
            as={Textarea}
            disabled={fieldsDisabled}
            name="description"
            data-testid="description"
            rows="6"
          />
        </div>

        <div className="mt-6 flex items-start">
          <Event className="text-disabled mr-3" />
          <div className="flex-1">
            <div className="mb-3 flex justify-between">
              <label className="text-sm text-active">Abierta hasta</label>
              <FieldMissingWarning name="deadline" />
            </div>

            <Field
              as={DateInput}
              name="deadline"
              className="testDeadline"
              disabled={fieldsDisabled}
            />
          </div>
        </div>

        <div className="mt-6 flex items-start">
          <School className="text-disabled mr-3" />
          <div className="flex-1">
            <div className="mb-3 flex justify-between">
              <label className="text-sm text-active">Tipo de beca</label>
              <FieldMissingWarning name="academicLevel" />
            </div>
            <AcademicLevelListbox
              name="academicLevel"
              data-testid="academicLevel"
              disabled={fieldsDisabled}
            />
          </div>
        </div>

        <div className="mt-6 flex items-start">
          <Money className="text-disabled mr-3" />
          <div className="flex-1">
            <div className="mb-3 flex justify-between">
              <label className="text-sm text-active">Financiamiento</label>
              <FieldMissingWarning name="fundingType" />
            </div>
            <FundingTypeListbox
              name="fundingType"
              disabled={fieldsDisabled}
              data-testid="fundingType"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
