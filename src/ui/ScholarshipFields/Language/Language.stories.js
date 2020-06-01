import React from 'react';
import { Language, LanguageEditable } from './index';

export default {
  title: 'Scholarship Fields / Language',
};

export const readOnly = () => <Language value="Klingon" />;

export const missing = () => <Language value={null} />;

export const Editable = () => {
  const [lang, setLang] = React.useState('');
  return <LanguageEditable value={lang} onChange={setLang} />;
};
