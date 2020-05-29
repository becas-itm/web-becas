import React from 'react';
import { Field } from 'formik';

import Textarea from 'ui/components/Textarea';
import EntityAvatar from 'ui/components/EntityAvatar';

import { FieldMissingWarning } from './FieldMissingWarning';

export function EntitySection({ entity, fieldsDisabled = false }) {
  return (
    <section className="flex flex-wrap pt-6 px-4 lg:px-0 border-t mt-8">
      <div className="mb-6 md:mb-0 md:flex-1">
        <h2 className="text-active font-semibold">Entidad</h2>
        <p className="text-sm text-medium mt-1 md:pr-10">
          Origen de convocatoria y detalles.
        </p>
      </div>

      <div className="w-full md:max-w-lg">
        {entity && (
          <div className="mt-2 flex items-start">
            <div className="mr-4">
              <EntityAvatar name={entity.name} />
            </div>
            <div className="flex-1">
              <label className="block text-base text-medium">
                Ofrecida por
              </label>
              <div>{entity.fullName}</div>
            </div>
          </div>
        )}

        <div className="flex flex-col mt-6 md:pl-10">
          <div className="mb-2 flex justify-between">
            <label className="text-sm text-active">Pasos</label>
            <FieldMissingWarning name="steps" />
          </div>
          <Field
            name="steps"
            as={Textarea}
            disabled={fieldsDisabled}
            data-testid="scholarshipSteps"
            rows="5"
          />
        </div>
      </div>
    </section>
  );
}
