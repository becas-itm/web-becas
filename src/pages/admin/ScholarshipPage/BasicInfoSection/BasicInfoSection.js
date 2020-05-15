import React from 'react';
import { Field } from 'formik';

import Textarea from 'ui/components/Textarea';
import DateInput from 'ui/components/DateInput';
import { Event, Money, School } from 'ui/components/Icon';

import {
  FundingTypeListbox,
  AcademicLevelListbox,
} from 'ui/components/Scholarship';

export function BasicInfoSection() {
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
          <div className="mb-2">
            <label className="text-sm text-active">Nombre</label>
          </div>
          <Field
            name="name"
            as={Textarea}
            data-testid="scholarshipName"
            rows="3"
          />
        </div>

        <div className="flex flex-col mt-6 md:pl-10">
          <div className="mb-2">
            <label className="text-sm text-active">Descripción</label>
          </div>
          <Field
            as={Textarea}
            name="description"
            data-testid="description"
            rows="6"
          />
        </div>

        <div className="mt-6 flex items-start">
          <Event className="text-disabled mr-3" />
          <div className="flex-1">
            <div className="mb-3">
              <label className="text-sm text-active">Abierta hasta</label>
            </div>

            <Field as={DateInput} name="deadline" className="testDeadline" />
          </div>
        </div>

        <div className="mt-6 flex items-start">
          <School className="text-disabled mr-3" />
          <div className="flex-1">
            <div className="mb-3">
              <label className="text-sm text-active">Tipo de beca</label>
            </div>
            <AcademicLevelListbox
              name="academicLevel"
              data-testid="academicLevel"
            />
          </div>
        </div>

        <div className="mt-6 flex items-start">
          <Money className="text-disabled mr-3" />
          <div className="flex-1">
            <div className="mb-3">
              <label className="text-sm text-active">Financiamiento</label>
            </div>
            <FundingTypeListbox name="fundingType" data-testid="fundingType" />
          </div>
        </div>
      </div>
    </section>
  );
}
