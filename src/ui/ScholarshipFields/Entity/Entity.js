import React from 'react';
import EntityAvatar from 'ui/EntityAvatar';
import { Field } from '../Field';

export function Entity({ code, fullName }) {
  return (
    <Field
      name="Publicada por"
      isMissing={!code && !fullName}
      icon={
        <div className="mr-2">
          <EntityAvatar code={code} name={fullName} />
        </div>
      }
    >
      {fullName}
    </Field>
  );
}
