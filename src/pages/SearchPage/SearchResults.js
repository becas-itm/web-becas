import React from 'react';
import { useGet } from 'utils/api';

import Button from 'ui/Button';
import Pagination from 'ui/Pagination';
import EmptyState from 'ui/EmptyState';
import { SettingsBackupRestore } from 'ui/Icon';

import ScholarshipPreview from './ScholarshipPreview';
import { ToggleFiltersDialogButton } from './ToggleFiltersDialogButton';

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
          <span className="flex items-center">
            Restablecer <SettingsBackupRestore className="ml-2" />
          </span>
        </Button>
      </EmptyState>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between mb-4 lg:mb-6">
        <div className="text-medium text-sm lg:text-base">
          <span className="font-semibold">{scholarships.length}</span> Resultado
          {scholarships.length > 1 ? 's' : ''}
        </div>

        <div className="lg:hidden">
          <ToggleFiltersDialogButton />
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6 lg:space-y-10">
        {scholarships.map(scholarship => (
          <ScholarshipPreview {...scholarship} key={scholarship.id} />
        ))}
      </div>

      <div className="max-w-lg mx-auto mt-4 lg:mt-8 px-4 md:px-0">
        <Pagination
          page={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPage={onPage}
        />
      </div>
    </>
  );
}
