import React from 'react';
import { useGet } from 'utils/hooks';

import Button from 'ui/Button';
import Pagination from 'ui/Pagination';
import EmptyState from 'ui/EmptyState';
import { SettingsBackupRestore } from 'ui/Icon';

import ScholarshipPreview from './ScholarshipPreview';

export default function SearchResults({ searchUrl, onPage }) {
  const { data } = useGet(searchUrl);
  const { results: scholarships, ...pagination } = data || { results: [] };

  if (scholarships.length === 0) {
    return (
      <EmptyState
        title="Sin resultados"
        description="Prueba otro término o restablece la búsqueda"
        mood="sad"
      >
        <Button outline type="reset" form="filters">
          Restablecer <SettingsBackupRestore className="ml-2" />
        </Button>
      </EmptyState>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-base text-medium mb-6 px-4">
        <span>Resultados de búsqueda</span>
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
