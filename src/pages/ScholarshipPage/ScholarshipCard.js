import React from 'react';
import { formatDeadline } from 'ui/ScholarshipFields';

export function ScholarshipCard({ name, description, deadline, entity }) {
  return (
    <article className="w-full bg-white shadow-sm rounded-sm p-6 sm:p-8 lg:p-12">
      <h1 className="font-semibold text-2xl leading-none lg:text-4xl">
        {name}
      </h1>
      <p className="mt-4 lg:mt-6">{description}</p>
      <footer className="mt-8 space-y-6">
        <div>
          <div className="text-medium mb-1 leading-none">Abierta hasta</div>
          <div>{formatDeadline(deadline)}</div>
        </div>
        <div>
          <div className="text-medium mb-1 leading-none">Publicada por</div>
          <div>{entity.name}</div>
        </div>
      </footer>
    </article>
  );
}
