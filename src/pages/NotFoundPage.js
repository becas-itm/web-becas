import React from 'react';
import LinkButton from 'ui/components/LinkButton';
import KawaiGhost from 'ui/components/KawaiGhost';
import { SiteTemplate } from 'ui/templates/SiteTemplate';

export default function NotFoundPage() {
  return (
    <SiteTemplate>
      <main className="flex flex-col items-center text-center px-4 mt-8">
        <KawaiGhost />
        <h1 className="font-mont text-5xl mt-6">404</h1>
        <p className="text-medium text-xl">No pudimos encontrar la página</p>
        <LinkButton to="/" className="mt-4">
          Regresa al inicio
        </LinkButton>
      </main>
    </SiteTemplate>
  );
}
