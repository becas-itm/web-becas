import React from 'react';
import { Formik, Form } from 'formik';
import { useParams } from 'react-router-dom';

import { useGet, useToggle } from 'utils/hooks';
import { useSnackbar } from 'ui/components/Snackbar';

import Button, { COLOR } from 'ui/components/Button';
import GoBackButton from 'ui/components/GoBackButton';
import AdminTemplate from 'ui/templates/AdminTemplate';
import { ScholarshipDetails } from 'pages/ScholarshipPage/ScholarshipDetails';

import { DenyDialog } from './PublishingSection/DenyDialog';
import { BasicInfoSection } from './BasicInfoSection/BasicInfoSection';
import { PublishingSection } from './PublishingSection/PublishingSection';
import { LocalizationSection } from './LocalizationSection/LocalizationSection';

import { SettingsBackupRestore } from 'ui/components/Icon';

import { useDeny } from './useDeny';
import { useEdit } from './useEdit';
import { useApprove } from './useApprove';
import { useRestore } from './useRestore';

function PageFetcher() {
  const { id } = useParams();
  const { data, refetch } = useGet(`/api/publishing/scholarships/${id}/`);

  return (
    <AdminTemplate>
      <ScholarshipPage scholarship={data} onUpdate={refetch} />
    </AdminTemplate>
  );
}

function ScholarshipPage({ scholarship: initialScholarship, onUpdate }) {
  const snack = useSnackbar();

  const deny = useDeny(initialScholarship.id);
  const [showDeny, toggleDeny] = useToggle();
  const handleDeny = reason => deny.deny(reason).then(() => toggleDeny());

  const approve = useApprove(initialScholarship.id);
  const handleApprove = () => approve.approve();

  const edit = useEdit(initialScholarship.id);
  const handleEdit = async form => {
    await edit.edit(form);
    snack.show('Convocatoria actualizada.');
    onUpdate();
  };

  const restore = useRestore(initialScholarship.id);
  const handleRestore = async () => {
    await restore.restore();
    snack.show('Convocatoria restaurada.');
    onUpdate();
  };

  const isArchived = initialScholarship.status === 'ARCHIVED';

  return (
    <>
      {isArchived && (
        <div className="restoreBanner bg-yellow-100 flex items-center justify-center h-10 border-b border-yellow-300 mb-6">
          <span className="font-semibold">Beca archivada</span>
          <span className="mx-1 text-yellow-500 select-none">・</span>
          <button
            onClick={handleRestore}
            className="text-primary hover:underline focus:underline focus:outline-none"
            type="button"
            data-testid="restoreBannerButton"
          >
            <SettingsBackupRestore small className="mr-1" />
            <span className="font-semibold">Restaurar</span>
          </button>
        </div>
      )}
      <Formik
        initialValues={{
          name: initialScholarship.name || '',
          description: initialScholarship.description || '',
          deadline: initialScholarship.deadline || '',
          fundingType: initialScholarship.fundingType || '',
          academicLevel: initialScholarship.academicLevel || '',
          language: initialScholarship.language || '',
          country: initialScholarship.country || null,
        }}
        onSubmit={handleEdit}
      >
        {({ values: scholarship }) => (
          <Form noValidate>
            <div className="mx-auto max-w-4xl pb-8">
              <header className="flex items-center my-2 lg:my-4 px-2 lg:px-0">
                <GoBackButton data-testid="goBack" />
                <h1 className="text-xl pl-2">Convocatoria</h1>
              </header>

              <main>
                <BasicInfoSection fieldsDisabled={isArchived} />

                <section className="flex flex-wrap pt-2 px-4 lg:px-0">
                  <div className="mb-6 md:mb-0 md:flex-1" />

                  <div className="mt-6 w-full md:max-w-lg flex items-start">
                    <div className="w-6 mr-3" />
                    <div className="flex-1 flex items-start">
                      <ScholarshipDetails
                        {...(initialScholarship.sourceDetails || {})}
                        entityName={initialScholarship.entity?.name}
                      />
                    </div>
                  </div>
                </section>

                <LocalizationSection
                  {...scholarship}
                  fieldsDisabled={isArchived}
                />

                <PublishingSection
                  {...initialScholarship}
                  onApprove={handleApprove}
                  onDeny={toggleDeny}
                  onRestore={handleRestore}
                />

                {!isArchived && (
                  <div className="flex flex-col sm:flex-row-reverse sm:items-center pt-6 px-4 lg:px-0 border-t mt-8">
                    <Button type="submit" data-testid="update">
                      Actualizar
                    </Button>

                    <Button
                      color={COLOR.secondary}
                      type="reset"
                      className="mt-3 sm:mt-0 sm:mr-3"
                    >
                      Cancelar
                    </Button>
                  </div>
                )}
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
    </>
  );
}

export default PageFetcher;
