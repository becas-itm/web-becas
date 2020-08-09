import React from 'react';

import {
  Entity,
  Country,
  Deadline,
  FundingType,
  Description,
  AcademicLevel,
} from 'ui/ScholarshipFields';

import { ScholarshipDetails } from './ScholarshipDetails';

export function ScholarshipCard({
  name,
  description,
  deadline,
  academicLevel,
  fundingType,
  country,
  entity,
  sourceDetails,
}) {
  return (
    <article className="w-full bg-white shadow rounded p-4 sm:p-8 md:px-12">
      <div className="max-w-xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-semibold mb-3">{name}</h1>

        <div className="mt-4">
          <Description value={description} />
        </div>

        <div className="pl-8 mt-6">
          <Deadline value={deadline} />

          <div className="mt-4">
            <AcademicLevel value={academicLevel} />
          </div>

          <div className="mt-4">
            <FundingType value={fundingType} />
          </div>

          <div className="mt-4">
            <Country {...(country || {})} />
          </div>

          <div className="flex -ml-8 mt-4">
            <Entity code={entity.code} name={entity.name} />
          </div>
        </div>

        <ScholarshipDetails {...sourceDetails} />
      </div>
    </article>
  );
}
