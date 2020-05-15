import React from 'react';
import { useField } from 'formik';

import AcademicLevelListbox from './AcademicLevelListbox';

function AcademicLevelField({ name, ...restProps }) {
  const [field, meta, helpers] = useField(name);

  const handleChange = level => {
    if (!meta.touched) {
      helpers.setTouched(true);
    }
    helpers.setValue(level);
  };

  return (
    <AcademicLevelListbox
      {...restProps}
      value={meta.value}
      onChange={handleChange}
      name={field.name}
    />
  );
}

export default AcademicLevelField;
