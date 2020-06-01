import React from 'react';
import EntityAvatar from 'ui/EntityAvatar';
import { Field } from '../Field';

export function Entity({ name, fullName }) {
  return (
    <Field
      name="Publicada por"
      isMissing={!name && !fullName}
      icon={
        <div className="mr-2">
          <EntityAvatar name={name} />
        </div>
      }
    >
      {fullName}
    </Field>
  );
}
