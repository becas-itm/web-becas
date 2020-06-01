import React from 'react';
import Combobox from 'ui/Combobox';

function CountryCombobox(props) {
  return <Combobox {...props} />;
}

CountryCombobox.defaultProps = {
  itemToString: country => country?.name || '',
};

export default CountryCombobox;
