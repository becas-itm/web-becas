import React from 'react';
import Textarea from 'ui/components/Textarea';
import { Description } from './Description';

export function DescriptionEditable({ value, onChange, ...restProps }) {
  const handleChange = event => onChange(event.target.value);
  return (
    <Description>
      <Textarea
        {...restProps}
        value={value}
        onChange={handleChange}
        className="mt-1"
      />
    </Description>
  );
}
