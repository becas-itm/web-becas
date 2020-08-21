import React from 'react';
import { useGet } from 'utils/api';
import { MdArrowBack } from 'react-icons/md';
import { useHistory, useParams } from 'react-router-dom';

import LinkButton from 'ui/LinkButton';
import EmptyState from 'ui/EmptyState';
import { SiteTemplate } from 'ui/SiteTemplate';

import { ScholarshipCard } from './ScholarshipCard';
import { ScholarshipInfo } from './ScholarshipInfo';
import { ScholarshipDetails } from './ScholarshipDetails';

function ScholarshipPage() {
  const { id: scholarshipId } = useParams();

  return (
    <SiteTemplate>
      <PageFetcher scholarshipId={scholarshipId} />
    </SiteTemplate>
  );
}

function PageFetcher({ scholarshipId }) {
  const { goBack } = useHistory();
  const { data } = useGet(`/search/scholarships/${scholarshipId}/`);

  if (!data) {
    return (
      <EmptyState
        title="¡Uy!"
        description="No pudimos encontrar la convocatoria"
      >
        <LinkButton to="/buscar">Busca otra</LinkButton>
      </EmptyState>
    );
  }

  return (
    <main className="max-w-xl lg:max-w-6xl mx-auto">
      <div className="mb-4">
        <button
          onClick={goBack}
          className="inline-flex items-center text-sm text-primary p-2"
        >
          <MdArrowBack size={20} aria-hidden className="mr-2" />
          Atrás
        </button>
      </div>
      <div className="flex justify-between flex-col flex-wrap lg:flex-row">
        <div className="flex-1 max-w-3xl">
          <ScholarshipCard {...data} />
        </div>

        <div className="mt-6 lg:mt-0 lg:ml-10 lg:w-1/3">
          <ScholarshipInfo {...data} />

          <div className="mt-6">
            <ScholarshipDetails {...(data.sourceDetails || {})} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ScholarshipPage;
