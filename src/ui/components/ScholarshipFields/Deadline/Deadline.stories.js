import React from 'react';
import { Deadline, DeadlineEditable } from './index';

export default {
  title: 'Scholarship Fields / Deadline',
};

export const readOnly = () => <Deadline value="2020-12-12" />;

export const missing = () => <Deadline value={null} />;

export const Editable = () => {
  const [date, setDate] = React.useState('2020-01-01');
  return <DeadlineEditable value={date} onChange={setDate} />;
};
