import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import DisclaimerPage from './index';

test('page should render correctly', () => {
  render(<DisclaimerPage />, {
    wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
  });

  expect(
    screen.getByText('Convocatorias y Becas Externas'),
  ).toBeInTheDocument();

  expect(screen.getByTestId('disclaimer').textContent).toMatchInlineSnapshot(
    `"Ésta sección tiene el fin de dar a conocer a la comunidad académica, las Convocatorias y Becas Externas de diferentes instituciones, organizaciones, fundaciones, países, entre otros. El ITM, a través de la Dirección de Cooperación y Relaciones Internacionales, podrá ofrecer asesoría y acompañamiento a aquellos miembros de su comunidad académica que pretendan postularse para dichas oportunidades académicas y que así lo soliciten. Cabe mencionar que estas oportunidades académicas son ajenas al ITM, pues ni las ha creado ni las administra, por lo que se debe aclarar que el ITM no tiene responsabilidad ni control sobre las condiciones, procedimientos y especificidades de las mismas."`,
  );
});
