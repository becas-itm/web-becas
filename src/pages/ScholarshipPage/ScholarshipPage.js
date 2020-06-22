import React from 'react';
import { useGet } from 'utils/api';
import { useParams } from 'react-router';

import Spinner from 'ui/Spinner';
import LinkButton from 'ui/LinkButton';
import EmptyState from 'ui/EmptyState';
import { SiteTemplate } from 'ui/SiteTemplate';

import { ScholarshipCard } from './ScholarshipCard';

function ScholarshipPage() {
  const { id: scholarshipId } = useParams();

  return (
    <SiteTemplate>
      <React.Suspense
        fallback={
          <div className="text-center">
            <Spinner />
          </div>
        }
      >
        <PageFetcher scholarshipId={scholarshipId} />
      </React.Suspense>
    </SiteTemplate>
  );
}

function PageFetcher({ scholarshipId }) {
  const { data } = useGet(`/api/search/scholarships/${scholarshipId}/`);

  if (!data) {
    return (
      <EmptyState
        title="¡Oops!"
        description="No pudimos encontrar la convocatoria"
      >
        <LinkButton to="/buscar" className="uppercase">
          Buscar otra
        </LinkButton>
      </EmptyState>
    );
  }

  return <ScholarshipCard {...data} />;
}

export default ScholarshipPage;
