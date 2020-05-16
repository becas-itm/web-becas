import React from 'react';
import propTypes from 'prop-types';

import Pill, { COLOR } from 'ui/components/Pill';
import LinkButton from 'ui/components/LinkButton';
import EntityAvatar from 'ui/components/EntityAvatar';
import { formatDeadline } from 'ui/components/ScholarshipFields';

function PillStatus({ status }) {
  if (status === 'COMPLETE') {
    return <Pill color={COLOR.green}>Completa</Pill>;
  }

  if (status === 'INCOMPLETE') {
    return <Pill color={COLOR.yellow}>Incompleta</Pill>;
  }

  return <Pill color={COLOR.gray}>Desconocido</Pill>;
}

export function ScholarshipPreview({ id, name, deadline, entity, fillStatus }) {
  return (
    <article className="bg-white shadow rounded border border-transparent mb-5">
      <div className="relative max-w-md mx-auto mt-4 mb-2 sm:mt-8 sm:mb-4 px-4 sm:px-0">
        <EntityAvatar
          name={entity.name}
          size={54}
          className="hidden md:block md:mr-8 absolute top-0 right-full mr-4"
        />
        <header>
          <div className="max-w-md mx-auto mb-1">{entity.fullName}</div>
          {deadline && <div>{formatDeadline(deadline)}</div>}
          <h1 className="text-xl font-semibold mt-1">{name}</h1>
        </header>

        <footer className="flex items-center justify-between mt-1">
          <PillStatus status={fillStatus} />
          <LinkButton to={`/admin/convocatorias/${id}`}>Ver más</LinkButton>
        </footer>
      </div>
    </article>
  );
}

ScholarshipPreview.propTypes = {
  id: propTypes.string.isRequired,
  deadline: propTypes.string,
  name: propTypes.string.isRequired,
  fillStatus: propTypes.string.isRequired,
  entity: propTypes.shape({
    name: propTypes.string.isRequired,
    fullName: propTypes.string.isRequired,
  }),
};
