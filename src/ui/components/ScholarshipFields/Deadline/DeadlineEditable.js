import React from 'react';
import { format } from 'date-fns';
import Input from 'ui/components/Input';

import { Deadline } from './Deadline';

const normalizeDate = date => format(new Date(date), 'yyyy-MM-dd');

export function DeadlineEditable({ value, onChange }) {
  const handleChange = event => onChange(event.target.value);
  return (
    <Deadline>
      <Input
        value={value ? normalizeDate(value) : ''}
        onChange={handleChange}
        className="mt-2"
        type="date"
      />
    </Deadline>
  );
}
