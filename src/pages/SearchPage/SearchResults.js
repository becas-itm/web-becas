import React from 'react';
import Button from 'ui/components/Button';
import Pagination from 'ui/components/Pagination';
import NotFoundGhost from 'ui/components/NotFoundGhost';
import { SettingsBackupRestore } from 'ui/components/Icon';

import { get } from 'utils/api';
import { useQuery } from 'react-query';

import ScholarshipPreview from './ScholarshipPreview';

export default function SearchResults({ searchUrl, onPage }) {
  const { data } = useQuery(searchUrl, get, { suspense: true });
  const { results: scholarships, ...pagination } = data || { results: [] };

  if (scholarships.length === 0) {
    return (
      <NotFoundGhost
        title="Sin resultados de búsqueda"
        description="Prueba usando un término más general, o bien"
      >
        <Button outline type="reset" form="filters">
          Restablece los filtros <SettingsBackupRestore className="ml-2" />
        </Button>
      </NotFoundGhost>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-base text-medium mb-6 px-4">
        <span>
          {scholarships.length > 1
            ? `${scholarships.length} Resultados`
            : '1 Resultado'}
        </span>
        <span> — Página {pagination.currentPage}</span>
      </h2>

      {scholarships.map(scholarship => (
        <ScholarshipPreview {...scholarship} key={scholarship.id} />
      ))}
      <div className="max-w-lg mx-auto mt-4 px-4 md:px-0">
        <Pagination
          page={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPage={onPage}
        />
      </div>
    </div>
  );
}
