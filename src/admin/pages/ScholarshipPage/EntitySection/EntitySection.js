import React from 'react';
import { Field } from 'formik';

import Avatar from 'ui/Avatar';
import MarkdownEditor, { StepsPreview } from 'ui/MarkdownEditor';

import { FieldMissingWarning } from '../FieldMissingWarning';
import EntityCombobox from './EntityCombobox';

function StepsField({ fieldsDisabled }) {
  const [isEditing, setEditing] = React.useState(true);
  const toggleEdit = () => setEditing(!isEditing);

  return (
    <div className="flex flex-col mt-6 md:pl-10">
      <div className="mb-2 flex justify-between">
        <label className="text-sm text-active">Pasos</label>
        <button onClick={toggleEdit} type="button" className="text-blue-500">
          {isEditing ? 'Previsualizar' : 'Editar'}
        </button>
      </div>
      <Field name="steps">
        {({ field }) =>
          isEditing ? (
            <MarkdownEditor
              {...field}
              disabled={fieldsDisabled}
              data-testid="scholarshipSteps"
              placeholder="Pasos para ver detalles de la convocatoria..."
              rows={5}
            />
          ) : (
            <StepsPreview src={field.value} />
          )
        }
      </Field>
    </div>
  );
}

export function EntitySection({ fieldsDisabled = false }) {
  return (
    <section className="flex flex-wrap pt-6 px-4 lg:px-0 border-t mt-8">
      <div className="mb-6 md:mb-0 md:flex-1">
        <h2 className="text-active font-semibold">Entidad</h2>
        <p className="text-sm text-medium mt-1 md:pr-10">
          Origen de convocatoria y detalles.
        </p>
      </div>

      <div className="w-full md:max-w-lg">
        <div className="mt-2 flex items-start">
          <div className="mr-4">
            <Field name="entity">
              {({ field }) => <Avatar name={field.value?.name} />}
            </Field>
          </div>
          <div className="flex-1">
            <div className="mb-3 flex justify-between">
              <label className="text-sm text-active">Ofrecida por</label>
              <FieldMissingWarning name="entity" />
            </div>
            <EntityCombobox name="entity" />
          </div>
        </div>

        <StepsField fieldsDisabled={fieldsDisabled} />
      </div>
    </section>
  );
}
