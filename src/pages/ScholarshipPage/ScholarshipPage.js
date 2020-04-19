import React from 'react';
import { get } from 'utils/api';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router';

import Spinner from 'ui/components/Spinner';
import LinkButton from 'ui/components/LinkButton';
import IconButton from 'ui/components/IconButton';
import CountryFlag from 'ui/components/CountryFlag';
import EntityAvatar from 'ui/components/EntityAvatar';
import NotFoundGhost from 'ui/components/NotFoundGhost';
import { SiteTemplate } from 'ui/templates/SiteTemplate';
import { Event, School, Money, ArrowBack } from 'ui/components/Icon';

import {
  formatDeadline,
  getFundingType,
  getAcademicLevel,
} from 'utils/scholarship';

import { ScholarshipDetails } from './ScholarshipDetails';

function ScholarshipPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isFetching } = useQuery(`/api/search/scholarships/${id}/`, get);

  if (isFetching) {
    return (
      <SiteTemplate>
        <div className="text-center">
          <Spinner />
        </div>
      </SiteTemplate>
    );
  }

  if (!data) {
    return (
      <SiteTemplate>
        <NotFoundGhost
          title="¡Oops!"
          description="No pudimos encontrar la beca"
        >
          <LinkButton to="/buscar">Ir a página de búsqueda</LinkButton>
        </NotFoundGhost>
      </SiteTemplate>
    );
  }

  return (
    <SiteTemplate>
      <main className="max-w-screen-md mx-auto p-6 bg-white shadow rounded sm:py-10 md:py-12">
        <div className="max-w-xl mx-auto">
          <div className="mb-3 flex items-center">
            <IconButton onClick={() => navigate(-1)} icon={ArrowBack}>
              Ir atrás
            </IconButton>
            <div className="pl-2">Convocatoria</div>
          </div>

          <h1 className="text-xl sm:text-2xl font-semibold mb-3">
            {data.name}
          </h1>
          <div className="text-sm text-medium">Descripción</div>
          <p className="text-base">{data.description}</p>

          <div className="pl-8 mt-6">
            {data.deadline && (
              <div className="flex">
                <Event className="text-disabled mr-2" />
                <div>
                  <div className="text-sm text-medium">Abierta hasta</div>
                  <div>{formatDeadline(data.deadline)}</div>
                </div>
              </div>
            )}

            <div className="flex mt-4">
              <School className="text-disabled mr-2" />
              <div>
                <div className="text-sm text-medium">Tipo de Beca</div>
                <div>{getAcademicLevel(data.academicLevel)}</div>
              </div>
            </div>

            <div className="flex mt-4">
              <Money className="text-disabled mr-2" />
              <div>
                <div className="text-sm text-medium">Financiamiento</div>
                <div>{getFundingType(data.fundingType)}</div>
              </div>
            </div>

            <div className="flex mt-4">
              <CountryFlag
                code={data.country.code}
                style={{ width: 24, height: 24 }}
                className="shadow-outline rounded-full mr-2 object-cover"
              />
              <div>
                <div className="text-sm text-medium">País</div>
                <div>{data.country.name}</div>
              </div>
            </div>

            <div className="flex mt-4 -ml-8">
              <div className="text-disabled mr-4">
                <EntityAvatar name={data.entity.name} />
              </div>
              <div>
                <div className="text-sm text-medium">Publicada por</div>
                <div>{data.entity.fullName}</div>
              </div>
            </div>
          </div>

          <ScholarshipDetails
            {...data.sourceDetails}
            entityName={data.entity.name}
          />
        </div>
      </main>
    </SiteTemplate>
  );
}

export default ScholarshipPage;
