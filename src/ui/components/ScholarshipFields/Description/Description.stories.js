import React from 'react';
import { Description, DescriptionEditable } from './index';

export default {
  title: 'Scholarship Fields / Description',
};

export const readOnly = () => <Description value="Jane Doe" />;

export const missing = () => <Description value={null} />;

export const Editable = () => {
  const [text, setText] = React.useState('');
  return <DescriptionEditable value={text} onChange={setText} />;
};
