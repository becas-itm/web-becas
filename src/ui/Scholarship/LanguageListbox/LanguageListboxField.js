import React from 'react';
import { useField } from 'formik';

import LanguageListbox from './LanguageListbox';

function LanguageListboxField({ name, ...restProps }) {
  const [field, meta, helpers] = useField(name);

  const handleChange = level => {
    if (!meta.touched) {
      helpers.setTouched(true);
    }
    helpers.setValue(level);
  };

  return (
    <LanguageListbox
      {...restProps}
      value={meta.value}
      onChange={handleChange}
      name={field.name}
    />
  );
}

export default LanguageListboxField;
