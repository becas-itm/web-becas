import React from 'react';
import { Button, KIND } from 'ui/components/Button';
import NotFoundGhost from 'ui/components/NotFoundGhost';
import { SettingsBackupRestore } from 'ui/components/Icon';

import ScholarshipPreview from './ScholarshipPreview';
import PaginationControls from './PaginationControls';

export default function SearchResults({ results, onPage, onResetFilters }) {
  const { results: scholarships, ...pagination } = results;

  if (scholarships.length === 0) {
    return (
      <NotFoundGhost
        title="Sin resultados de búsqueda"
        description="Prueba usando un término más general, o bien"
      >
        <Button onClick={onResetFilters} kind={KIND.tertiary}>
          Restablece los filtros <SettingsBackupRestore className="ml-2" />
        </Button>
      </NotFoundGhost>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-base text-gray-700 mb-4 px-4">
        <span>Resultados de búsqueda</span>
        <span> — Página {pagination.currentPage}</span>
      </h2>
      {scholarships.map(scholarship => (
        <ScholarshipPreview {...scholarship} key={scholarship.id} />
      ))}
      <PaginationControls {...pagination} onPrev={onPage} onNext={onPage} />
    </div>
  );
}
