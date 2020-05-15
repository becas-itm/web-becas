import React from 'react';
import { useField } from 'formik';

import { Warning } from 'ui/components/Icon';

export function FieldMissingWarning({ name }) {
  const [, meta] = useField(name);

  return (
    <div className="inline-flex items-center">
      {!meta.value && (
        <>
          <Warning small style={{ color: '#FAC809' }} className="mr-2" />
          <span className="text-sm text-yellow-600 font-semibold">
            Desconocido
          </span>
        </>
      )}
    </div>
  );
}
