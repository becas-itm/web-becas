import React from 'react';
import Spinner from 'ui/Spinner';
import AdminTemplate from 'admin/ui/AdminTemplate';
import { PendingResults } from './PendingResults';

const DEFAULT_FILTERS = { page: 1 };

function PendingScholarshipsPage() {
  const [page, setPage] = React.useState(DEFAULT_FILTERS.page);
  const searchUrl = `/publishing/scholarships/?page=${page}`;

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
