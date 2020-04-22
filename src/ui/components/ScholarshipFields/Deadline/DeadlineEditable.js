import React from 'react';
import Input from 'ui/components/Input';
import { Deadline } from './Deadline';

export function DeadlineEditable({ value, onChange }) {
  const handleChange = event => onChange(event.target.value);
  return (
    <Deadline>
      <Input
        value={value}
        onChange={handleChange}
        className="mt-2"
        type="date"
      />
    </Deadline>
  );
}
