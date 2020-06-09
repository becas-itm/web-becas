import React from 'react';
import ScholarshipDetailsDialog from 'pages/ScholarshipPage/ScholarshipDetailsDialog';

export default {
  title: 'ScholarshipDetailsDialog',
  component: ScholarshipDetailsDialog,
  decorators: [],
};

const STEPS =
  '#### Realiza los siguientes pasos para obtener más información acerca de la convocatoria: \n \n 1. Ingresa el portal de becas del [ICETEX](https://portal.icetex.gov.co/Portal/Home/HomeEstudiante/becas/becas-para-estudios-en-el-exterior/becas-vigentes) \n 2. Selecciona la opción _Número de Convocatoria_ \n 3. Ingresa el siguiente número: **123** \n 4. Presiona en _Buscar_';

export const Details = () => {
  return <ScholarshipDetailsDialog src={STEPS} />;
};
