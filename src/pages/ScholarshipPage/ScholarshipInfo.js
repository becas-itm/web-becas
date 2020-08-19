import React from 'react';
import { Country, FundingType, AcademicLevel } from 'ui/ScholarshipFields';

export function ScholarshipInfo({ academicLevel, fundingType, country }) {
  return (
    <aside className="w-full bg-white shadow-sm rounded-sm p-6 sm:p-8">
      <div className="space-y-6">
        <AcademicLevel value={academicLevel} />
        <FundingType value={fundingType} />
        <Country {...(country || {})} />
      </div>
    </aside>
  );
}
