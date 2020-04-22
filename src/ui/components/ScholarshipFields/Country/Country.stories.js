import React from 'react';
import { Country, CountryEditable } from './index';

export default {
  title: 'Scholarship Fields / Country',
};

const COLOMBIA = { name: 'Colombia', code: 'COL' };

export const readOnly = () => <Country {...COLOMBIA} />;

export const missing = () => <Country name={null} code={null} />;

export const Editable = () => {
  const [country, setCountry] = React.useState(COLOMBIA);
  return <CountryEditable value={country} onChange={setCountry} />;
};
