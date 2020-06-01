import React from 'react';
import { action } from '@storybook/addon-actions';
import { PublishingSection } from './PublishingSection';

export default {
  title: 'Scholarship Detail / Publishing',
  component: PublishingSection,
};

export const newScholarship = () => <PublishingSection />;

export const completePending = () => (
  <PublishingSection
    onApprove={action('onApprove')}
    onDeny={action('onDeny')}
    {...{
      entity: {
        name: 'daad',
        fullName: 'Servicio Alemán de Intercambio Académico',
      },
      fillStatus: 'COMPLETE',
      state: 'PENDING',
    }}
  />
);

export const incompletePending = () => (
  <PublishingSection
    onDeny={action('onDeny')}
    {...{
      entity: {
        name: 'daad',
        fullName: 'Servicio Alemán de Intercambio Académico',
      },
      fillStatus: 'INCOMPLETE',
      state: 'PENDING',
    }}
  />
);

export const published = () => (
  <PublishingSection
    onArchive={action('onArchive')}
    {...{
      entity: {
        name: 'daad',
        fullName: 'Servicio Alemán de Intercambio Académico',
      },
      state: 'PUBLISHED',
      approval: {
        approvedAt: '2020-05-21T05:00:00.000Z',
      },
    }}
  />
);

export const denied = () => (
  <PublishingSection
    onRestore={action('onRestore')}
    {...{
      entity: {
        name: 'daad',
        fullName: 'Servicio Alemán de Intercambio Académico',
      },
      state: 'DENIED',
      denial: {
        deniedAt: '2020-05-21T05:00:00.000Z',
        reason: 'Convocatoria duplicada/archivada',
      },
    }}
  />
);

export const archived = () => (
  <PublishingSection
    onRestore={action('onRestore')}
    {...{
      entity: {
        name: 'daad',
        fullName: 'Servicio Alemán de Intercambio Académico',
      },
      state: 'ARCHIVED',
      archive: { archivedAt: '2020-05-21T05:00:00.000Z' },
    }}
  />
);
