import React from 'react';
import { useGet } from 'utils/api';
import { useParams } from 'react-router';

import LinkButton from 'ui/LinkButton';
import EmptyState from 'ui/EmptyState';
import { SiteTemplate } from 'ui/SiteTemplate';

import { ScholarshipCard } from './ScholarshipCard';

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
