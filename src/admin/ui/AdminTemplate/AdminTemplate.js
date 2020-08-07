import React from 'react';

import Spinner from 'ui/Spinner';
import AppFooter from 'ui/AppFooter';
import PageRibbon from 'ui/PageRibbon';

import { AdminHeader } from './AdminHeader';

const AdminTemplate = React.memo(function AdminTemplate({ children }) {
  return (
    <>
      <div
        className="min-h-screen flex flex-col"
        style={{ background: '#fafdff' }}
      >
        <PageRibbon />

        <div className="w-full max-w-2xl lg:max-w-6xl mx-auto mt-2 lg:mt-8 px-4">
          <AdminHeader />
        </div>

        <div className="flex-1">
          <React.Suspense
            fallback={
              <div className="text-center mt-4">
                <Spinner />
              </div>
            }
          >
            {children}
          </React.Suspense>
        </div>
      </div>

      <AppFooter />
    </>
  );
});

export default AdminTemplate;
