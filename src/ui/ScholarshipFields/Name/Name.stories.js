import React from 'react';
import { Name, NameEditable } from './index';

export default {
  title: 'Scholarship Fields / Name',
};

export const readOnly = () => <Name value="Jane Doe" />;

export const missing = () => <Name value={null} />;

export const Editable = () => {
  const [text, setText] = React.useState('');
  return <NameEditable value={text} onChange={setText} />;
};
