import React from 'react';
import Textarea from 'ui/components/Textarea';
import { Description } from './Description';

export function DescriptionEditable({ value, onChange }) {
  const handleChange = event => onChange(event.target.value);
  return (
    <Description>
      <Textarea value={value} onChange={handleChange} />
    </Description>
  );
}
