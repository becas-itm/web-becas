import React from 'react';
import { useGet } from 'utils/hooks';
import { useParams } from 'react-router';

import Spinner from 'ui/components/Spinner';
import LinkButton from 'ui/components/LinkButton';
import NotFoundGhost from 'ui/components/NotFoundGhost';
import { SiteTemplate } from 'ui/templates/SiteTemplate';

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
      <NotFoundGhost title="¡Oops!" description="No pudimos encontrar la beca">
        <LinkButton to="/buscar">Ir a página de búsqueda</LinkButton>
      </NotFoundGhost>
    );
  }

  return <ScholarshipCard {...data} />;
}

export default ScholarshipPage;
