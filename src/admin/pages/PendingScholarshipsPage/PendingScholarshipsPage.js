import React from 'react';
import Spinner from 'ui/Spinner';
import AdminTemplate from 'admin/ui/AdminTemplate';
import { PendingResults } from './PendingResults';

const DEFAULT_FILTERS = { page: 1 };

function PendingScholarshipsPage({ state = '' }) {
  const [page, setPage] = React.useState(DEFAULT_FILTERS.page);
  const searchUrl = `/api/publishing/scholarships/?page=${page}&state=${state}`;

  return (
    <AdminTemplate>
      <div className="max-w-2xl mx-auto">
        <React.Suspense
          fallback={
            <div className="text-center mt-4">
              <Spinner />
            </div>
          }
        >
          <PendingResults searchUrl={searchUrl} onPage={setPage} />
        </React.Suspense>
      </div>
    </AdminTemplate>
  );
}

export default PendingScholarshipsPage;
