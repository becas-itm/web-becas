import React from 'react';
import Textarea from 'ui/Textarea';
import { Name } from './Name';

export function NameEditable({ value, onChange }) {
  const handleChange = event => onChange(event.target.value);
  return (
    <Name>
      <Textarea value={value} onChange={handleChange} className="mt-1" />
    </Name>
  );
}
