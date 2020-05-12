import React from 'react';
import { Formik, Form } from 'formik';
import { useParams } from 'react-router-dom';

import { useGet, useToggle } from 'utils/hooks';
import GoBackButton from 'ui/components/GoBackButton';
import AdminTemplate from 'ui/templates/AdminTemplate';

import { DenyDialog } from './PublishingSection/DenyDialog';
import { BasicInfoSection } from './BasicInfoSection/BasicInfoSection';
import { PublishingSection } from './PublishingSection/PublishingSection';
import { LocalizationSection } from './LocalizationSection/LocalizationSection';

import { useDeny } from './useDeny';
import { useApprove } from './useApprove';

function PageFetcher() {
  const { id } = useParams();
  const { data } = useGet(`/api/publishing/scholarships/${id}/`);

  return (
    <AdminTemplate>
      <ScholarshipPage scholarship={data} />
    </AdminTemplate>
  );
}

function ScholarshipPage({ scholarship: initialScholarship }) {
  const deny = useDeny(initialScholarship.id);
  const [showDeny, toggleDeny] = useToggle();

  const approve = useApprove(initialScholarship.id);
  const handleApprove = () => approve.approve();

  const handleDeny = reason => deny.deny(reason).then(() => toggleDeny());

  return (
    <Formik initialValues={initialScholarship} onSubmit={() => {}}>
      {({ values: scholarship }) => (
        <Form noValidate>
          <div className="mx-auto max-w-4xl pb-8">
            <header className="flex items-center my-3 px-4 lg:px-0">
              <GoBackButton data-testid="goBack" />
              <h1 className="text-xl pl-4">Convocatoria</h1>
            </header>

            <main>
              <BasicInfoSection {...scholarship} />
              <LocalizationSection {...scholarship} />
              <PublishingSection
                {...scholarship}
                onApprove={handleApprove}
                onDeny={toggleDeny}
              />
            </main>

            <DenyDialog
              isOpen={showDeny}
              onDeny={handleDeny}
              onDismiss={toggleDeny}
              onCancel={toggleDeny}
              isLoading={deny.isDenying}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default PageFetcher;
