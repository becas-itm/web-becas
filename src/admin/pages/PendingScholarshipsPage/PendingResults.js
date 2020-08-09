import React from 'react';

import { Add } from 'ui/Icon';
import { useGet } from 'utils/api';
import Pagination from 'ui/Pagination';
import LinkButton from 'ui/LinkButton';

import { ScholarshipPreview } from './ScholarshipPreview';

export function PendingResults({ searchUrl, onPage }) {
  const { data } = useGet(searchUrl);
  const { results: scholarships, ...pagination } = data || { results: [] };

  if (scholarships.length === 0) {
    return <p className="text-center pt-12">No hay becas pendientes</p>;
  }

  return (
    <div className="w-full">
      <header
        className="bg-white rounded-sm flex items-start justify-between shadow-sm p-4 md:p-6"
        style={{
          boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.12)',
        }}
      >
        <div>
          <h1 className="text-2xl">Becas</h1>
          <p className="text-base text-medium leading-tight mt-2">
            Crea, aprueba y rechaza nuevas convocatorias.
          </p>
        </div>
        <div className="ml-4">
          <LinkButton to="/convocatorias/crear" outline={false}>
            <span className="flex items-center">
              <Add className="mr-1" /> Nueva
            </span>
          </LinkButton>
        </div>
      </header>

      <div className="mt-8">
        <div className="px-4">
          <div className="mb-4 lg:mb-6">
            <div className="text-medium text-sm lg:text-base">
              <span className="font-semibold">{scholarships.length}</span>{' '}
              Resultado
              {scholarships.length > 1 ? 's' : ''}
            </div>
          </div>
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
    </div>
  );
}
