import React from 'react';
import LinkButton from 'ui/LinkButton';
import EmptyState from 'ui/EmptyState';
import { SiteTemplate } from 'ui/SiteTemplate';

export default function NotFoundPage() {
  return (
    <SiteTemplate>
      <EmptyState
        title="404"
        description="No pudimos encontrar la página."
        mood="sad"
      >
        <LinkButton to="/">Regresa al inicio</LinkButton>
      </EmptyState>
    </SiteTemplate>
  );
}
