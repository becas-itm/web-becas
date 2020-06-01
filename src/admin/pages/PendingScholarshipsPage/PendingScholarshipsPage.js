import React from 'react';
import Spinner from 'ui/components/Spinner';
import AdminTemplate from 'ui/templates/AdminTemplate';
import { PendingResults } from './PendingResults';

const DEFAULT_FILTERS = { page: 1 };

function PendingScholarshipsPage() {
  const [page, setPage] = React.useState(DEFAULT_FILTERS.page);
  const searchUrl = `/api/publishing/scholarships/?page=${page}`;

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
