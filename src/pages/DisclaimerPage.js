import React from 'react';
import { SiteTemplate } from 'ui/templates/SiteTemplate';

export default function DisclaimerPage() {
  return (
    <SiteTemplate>
      <main className="max-w-screen-sm px-4 pt-6 py-10 my-6 shadow bg-white rounded sm:mx-auto sm:px-16 sm:pt-8 sm:pb-12">
        <h1 className="text-2xl font-semibold mb-4 sm:text-3xl">
          Convocatorias y Becas Externas
        </h1>
        <p className="text-base text-justify leading-relaxed">
          Ésta sección tiene el fin de dar a conocer a la comunidad académica,
          las Convocatorias y Becas Externas de diferentes instituciones,
          organizaciones, fundaciones, países, entre otros. El ITM, a través de
          la Dirección de Cooperación y Relaciones Internacionales, podrá
          ofrecer asesoría y acompañamiento a aquellos miembros de su comunidad
          académica que pretendan postularse para dichas oportunidades
          académicas y que así lo soliciten. Cabe mencionar que estas
          oportunidades académicas son ajenas al ITM, pues ni las ha creado ni
          las administra, por lo que se debe aclarar que el ITM no tiene
          responsabilidad ni control sobre las condiciones, procedimientos y
          especificidades de las mismas.
        </p>
      </main>
    </SiteTemplate>
  );
}
