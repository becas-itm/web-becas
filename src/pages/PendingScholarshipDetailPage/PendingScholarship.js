import React from 'react';
import { useToggle } from 'utils/hooks';

import { Edit } from 'ui/components/Icon';
import IconButton from 'ui/components/IconButton';
import Button, { COLOR } from 'ui/components/Button';
import GoBackButton from 'ui/components/GoBackButton';
import { ScholarshipDetails } from 'pages/ScholarshipPage/ScholarshipDetails';

import {
  Entity,
  Country,
  Deadline,
  Language,
  Description,
  FundingType,
  AcademicLevel,
} from 'ui/components/ScholarshipFields';

import { DenyDialog } from './DenyDialog';
import { useApprove } from './useScholarship';

export default function PendingScholarship({ scholarship, onEdit }) {
  const { approve, isApproving, isApproved } = useApprove(scholarship.id);

  const [isDenied, toggleIsDenied] = useToggle();
  const [showDeny, toggleDenyDialog] = useToggle();

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="hidden md:block absolute -ml-16">
        <GoBackButton />
      </div>

      <IconButton
        icon={Edit}
        onClick={onEdit}
        className="hidden md:block absolute left-full ml-2"
      >
        Editar convocatoria
      </IconButton>

      <div className="mb-2">
        <h1 className="text-xl sm:text-2xl font-semibold">
          {scholarship.name}
        </h1>
      </div>

      <Description value={scholarship.description} />

      <div className="pl-8 mt-6">
        <Deadline value={scholarship.deadline} />

        <div className="mt-4">
          <AcademicLevel value={scholarship.academicLevel} />
        </div>

        <div className="mt-4">
          <FundingType value={scholarship.fundingType} />
        </div>

        <div className="mt-4">
          <Language value={scholarship.language} />
        </div>

        <div className="mt-4">
          <Country {...(scholarship.country || {})} />
        </div>

        <div className="mt-4 -ml-8">
          <Entity
            name={scholarship.entity.name}
            fullName={scholarship.entity.fullName}
          />
        </div>
      </div>

      <ScholarshipDetails
        {...scholarship.sourceDetails}
        entityName={scholarship.entity?.name}
      />

      <div className="flex justify-end mt-6">
        <Button
          disabled={isApproving || isApproved || isDenied}
          onClick={toggleDenyDialog}
          color={COLOR.danger}
          outline
        >
          Rechazar
        </Button>

        <Button
          onClick={approve}
          isLoading={isApproving}
          disabled={
            scholarship.fillStatus === 'INCOMPLETE' || isApproved || isDenied
          }
          className="ml-3"
        >
          Aprobar
        </Button>
      </div>

      {showDeny && (
        <DenyDialog
          onDeny={() => {
            toggleIsDenied();
            toggleDenyDialog();
          }}
          onCancel={toggleDenyDialog}
          scholarshipId={scholarship.id}
        />
      )}
    </div>
  );
}
