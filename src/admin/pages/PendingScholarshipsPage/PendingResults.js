import React from 'react';
import { useQuery } from 'react-query';

import { get } from 'utils/api';
import Pagination from 'ui/Pagination';
import { ScholarshipPreview } from './ScholarshipPreview';
import LinkButton from 'ui/LinkButton';
import { Add } from 'ui/Icon';

export function PendingResults({ searchUrl, onPage }) {
  const { data } = useQuery(searchUrl, get, { suspense: true });
  const { results: scholarships, ...pagination } = data || { results: [] };

  if (scholarships.length === 0) {
    return <p className="text-center pt-12">No hay becas pendientes</p>;
  }

  return (
    <div className="w-full">
      <header className="my-4 px-4 flex flex-wrap items-baseline justify-between">
        <h1 className="text-xl font-semibold">Convocatorias</h1>
        <LinkButton to="/convocatorias/crear">
          Nueva <Add className="ml-2" />
        </LinkButton>
      </header>

      <h2 className="text-base mb-8 px-4">
        <span>Resultados de búsqueda</span>
        <span> — Página {pagination.currentPage}</span>
      </h2>

      {scholarships.map(scholarship => (
        <ScholarshipPreview {...scholarship} key={scholarship.id} />
      ))}

      <div className="max-w-lg mx-auto my-4 px-4 md:px-0">
        <Pagination
          page={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPage={onPage}
        />
      </div>
    </div>
  );
}
