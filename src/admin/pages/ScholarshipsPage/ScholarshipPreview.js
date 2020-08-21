import React from 'react';
import propTypes from 'prop-types';

import Pill, { COLOR } from 'ui/Pill';
import LinkButton from 'ui/LinkButton';

function PillStatus({ status }) {
  if (status === 'COMPLETE') {
    return <Pill color={COLOR.green}>Completa</Pill>;
  }

  if (status === 'INCOMPLETE') {
    return <Pill color={COLOR.yellow}>Incompleta</Pill>;
  }

  return <Pill color={COLOR.gray}>Desconocido</Pill>;
}

export function ScholarshipPreview({ id, name, entity, fillStatus }) {
  return (
    <article className="bg-white shadow-sm rounded-sm md:rounded p-6">
      <header>
        <h1 className="font-semibold leading-5 text-base md:text-lg lg:text-xl md:leading-6">
          {name}
        </h1>
      </header>

      <div className="flex items-end justify-between">
        <div className="w-full lg:max-w-xl">
          <p className="mt-3 text-medium text-sm md:text-base">{entity.name}</p>

          <footer className="mt-3">
            <PillStatus status={fillStatus} />
          </footer>
        </div>

        <div className="hidden md:block md:ml-4">
          <LinkButton to={`/convocatorias/${id}`} className="uppercase">
            Ver
          </LinkButton>
        </div>
      </div>
    </article>
  );
}

ScholarshipPreview.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  fillStatus: propTypes.string.isRequired,
  entity: propTypes.shape({ name: propTypes.string.isRequired }),
};
