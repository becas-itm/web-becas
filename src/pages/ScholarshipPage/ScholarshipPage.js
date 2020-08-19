import React from 'react';
import { useGet } from 'utils/api';
import { useParams } from 'react-router';

import LinkButton from 'ui/LinkButton';
import EmptyState from 'ui/EmptyState';
import GoBackButton from 'ui/GoBackButton';
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
      <div className="mb-4 lg:mb-6 flex items-center">
        <GoBackButton />
        <div className="pl-2 text-medium">Volver</div>
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
