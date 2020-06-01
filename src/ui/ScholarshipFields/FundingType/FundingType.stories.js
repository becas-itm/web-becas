import React from 'react';
import { FundingType, FundingTypeEditable, FUNDINGS } from './index';

export default {
  title: 'Scholarship Fields / Funding Type',
};

export const readOnly = () => <FundingType value={FUNDINGS.COMPLETE} />;

export const missing = () => <FundingType value={null} />;

export const Editable = () => {
  const [type, setType] = React.useState('');
  return <FundingTypeEditable value={type} onChange={setType} />;
};
