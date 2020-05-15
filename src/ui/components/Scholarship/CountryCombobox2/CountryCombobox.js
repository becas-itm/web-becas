import React from 'react';
import propTypes from 'prop-types';

import { useField } from 'formik';

import Combobox, {
  ComboboxInput,
  ComboboxPopover,
} from 'ui/components/Combobox';

import { CountryComboboxMenu } from './CountryComboboxMenu';

function CountryCombobox({ name, placeholder = 'Buscar', ...restProps }) {
  const [field, meta, helpers] = useField(name);

  const touchField = () => {
    if (!meta.touched) {
      helpers.setTouched(true);
    }
  };

  const handleChange = selected => {
    helpers.setValue(selected);
    touchField();
  };

  return (
    <Combobox
      itemToString={country => country?.name || ''}
      selectedItem={meta.value || {}}
      onChange={handleChange}
      onSelect={handleChange}
    >
      <ComboboxInput
        onBlur={touchField}
        name={field.name}
        placeholder={placeholder}
        inputClass="placeholder-active"
        {...restProps}
      />
      <ComboboxPopover>
        <CountryComboboxMenu />
      </ComboboxPopover>
    </Combobox>
  );
}

CountryCombobox.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
};

export default CountryCombobox;
