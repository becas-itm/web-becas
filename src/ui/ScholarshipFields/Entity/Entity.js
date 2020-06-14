import React from 'react';
import EntityAvatar from 'ui/EntityAvatar';
import { Field } from '../Field';

export function Entity({ code, name }) {
  return (
    <Field
      name="Publicada por"
      isMissing={!code && !name}
      icon={
        <div className="mr-2">
          <EntityAvatar code={code} name={name} />
        </div>
      }
    >
      {name}
    </Field>
  );
}
