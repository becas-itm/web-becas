import React from 'react';
import { format } from 'date-fns';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import locale from 'date-fns/locale/es';

import { Event } from 'ui/components/Icon';
import LinkButton from 'ui/components/LinkButton';
import EntityAvatar from 'ui/components/EntityAvatar';

function formatDeadline(date) {
  const FORMAT = `d 'de' MMMM 'de' yyyy`;
  return format(new Date(date), FORMAT, { locale });
}

export default function ScholarshipPreview({
  id,
  name,
  description,
  deadline,
  entity,
}) {
  return (
    <article className="bg-white shadow rounded mb-6 lg:mb-10 py-6 sm:py-10">
      <div className="relative max-w-md mx-auto px-4 sm:px-0">
        <EntityAvatar
          name={entity.name}
          size={60}
          className="hidden md:block absolute top-0 right-full md:mr-8"
        />

        <h1 className="text-xl font-semibold mb-2">
          <Link
            to={`/convocatoria/${id}`}
            className="underline lg:no-underline hover:underline focus:underline focus:outline-none"
          >
            {name}
          </Link>
        </h1>

        <p className="mb-4 text-justify">{description}</p>

        <div className="flex items-end md:items-center justify-between relative">
          <div className="flex items-center">
            {deadline && (
              <div className="flex pr-3">
                <Event className="text-disabled mr-2 flex-shrink-0" />
                <div>
                  <div className="hidden sm:block text-sm text-medium">
                    Abierta hasta
                  </div>
                  <div>{formatDeadline(deadline)}</div>
                </div>
              </div>
            )}
          </div>

          <div className="hidden md:block flex-shrink-0">
            <LinkButton to={`/convocatoria/${id}`}>Ver más</LinkButton>
          </div>

          <div className="md:hidden flex-shrink-0">
            <EntityAvatar name={entity.name} size={48} />
          </div>
        </div>
      </div>
    </article>
  );
}

ScholarshipPreview.propTypes = {
  id: propTypes.string.isRequired,
  deadline: propTypes.string,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  entity: propTypes.shape({
    name: propTypes.string.isRequired,
    fullName: propTypes.string.isRequired,
  }),
};
