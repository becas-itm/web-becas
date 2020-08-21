import React from 'react';
import AdminTemplate from 'admin/ui/AdminTemplate';
import { PendingResults } from './PendingResults';

const DEFAULT_FILTERS = { page: 1 };

function PendingScholarshipsPage() {
  const [page, setPage] = React.useState(DEFAULT_FILTERS.page);
  const searchUrl = `/publishing/scholarships/?page=${page}`;

  return (
    <AdminTemplate>
      <div className="max-w-2xl lg:max-w-4xl mx-auto p-4">
        <PendingResults searchUrl={searchUrl} onPage={setPage} />
      </div>
    </AdminTemplate>
  );
}

export default PendingScholarshipsPage;
