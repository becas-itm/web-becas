import React from 'react';
import Input from 'ui/Input';

import { Deadline } from './Deadline';

const normalizeDate = date => date.substring(0, 10);

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
