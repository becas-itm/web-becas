import React from 'react';
import { useQuery } from 'react-query';

import { get } from 'utils/api';
import Pagination from 'ui/components/Pagination';
import { ScholarshipPreview } from './ScholarshipPreview';
import LinkButton from 'ui/components/LinkButton';
import { Add } from 'ui/components/Icon';

export function PendingResults({ searchUrl, onPage }) {
  const { data } = useQuery(searchUrl, get, { suspense: true });
  const { results: scholarships, ...pagination } = data || { results: [] };

  if (scholarships.length === 0) {
    return <p className="text-center pt-12">No hay becas pendientes</p>;
  }

  return (
    <div className="w-full">
      <div className="h-10 flex items-center px-4 border-b bg-white sm:mt-4 lg:mt-8 sm:bg-transparent sm:border-none">
        <h1 className="text-base sm:text-2xl">Convocatorias pendientes</h1>
      </div>

      <div className="mb-4 flex flex-wrap items-end justify-between">
        <h2 className="text-base my-4 px-4">
          <span>Resultados de búsqueda</span>
          <span> — Página {pagination.currentPage}</span>
        </h2>
        <LinkButton to="/admin/pendientes/crear">
          Nuevo <Add className="ml-2" />
        </LinkButton>
      </div>
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
