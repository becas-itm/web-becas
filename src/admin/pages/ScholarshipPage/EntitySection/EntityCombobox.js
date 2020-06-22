import React from 'react';
import propTypes from 'prop-types';
import { useField } from 'formik';

import { useGet } from 'utils/api';

import Combobox, {
  ComboboxInput,
  ComboboxPopover,
  ComboboxMenu,
} from 'ui/Combobox';

function EntityCombobox({ name, placeholder = 'Buscar', ...restProps }) {
  const { data: entities } = useGet('/api/entities/');

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
      itemToString={entity => entity?.name || ''}
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
        <ComboboxMenu
          items={entities || []}
          itemToKey={item => item.code}
          RenderComboboxItem={({ item, ...restProps }) => (
            <li {...restProps}>{item.name}</li>
          )}
        />
      </ComboboxPopover>
    </Combobox>
  );
}

EntityCombobox.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
};

export default EntityCombobox;
