import React from 'react';
import Button from 'ui/Button';
import { OpenInNew } from 'ui/Icon';
import ScholarshipDetailsDialog from './ScholarshipDetailsDialog';

export function ScholarshipDetails({ steps, url }) {
  if (steps) {
    return <ScholarshipDetailsDialog src={steps} />;
  }

  if (url) {
    return (
      <div className="flex justify-center mt-2">
        <Button
          renderAs={'a'}
          outline
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver detalles
          <OpenInNew auto className="inline-block ml-2 w-5 h-5" />
        </Button>
      </div>
    );
  }

  return null;
}
