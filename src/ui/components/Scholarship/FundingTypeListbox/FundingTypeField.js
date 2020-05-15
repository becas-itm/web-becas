import React from 'react';
import { useField } from 'formik';

import FundingTypeListbox from './FundingTypeListbox';

function FundingTypeField({ name, ...restProps }) {
  const [field, meta, helpers] = useField(name);

  const handleChange = level => {
    if (!meta.touched) {
      helpers.setTouched(true);
    }
    helpers.setValue(level);
  };

  return (
    <FundingTypeListbox
      {...restProps}
      value={meta.value}
      onChange={handleChange}
      name={field.name}
    />
  );
}

export default FundingTypeField;
