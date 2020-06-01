import React from 'react';
import { AcademicLevel, AcademicLevelEditable, LEVELS } from './index';

export default {
  title: 'Scholarship Fields / AcademicLevel',
};

export const readOnly = () => <AcademicLevel value={LEVELS.POSTGRADUATE} />;

export const missing = () => <AcademicLevel />;

export const Editable = () => {
  const [level, setLevel] = React.useState('');
  return <AcademicLevelEditable value={level} onChange={setLevel} />;
};
