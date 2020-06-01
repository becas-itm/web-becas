import React from 'react';
import Button from 'ui/Button';
import AppLogo from 'ui/AppLogo';
import { Refresh } from 'ui/Icon';
import PageRibbon from 'ui/PageRibbon';
import EmptyState from 'ui/EmptyState';
import { ReactComponent as HeroImage } from './undrawBugFixing.svg';

function ErrorPage() {
  const handleClick = () => window.location.reload();
  return (
    <div>
      <PageRibbon />

      <div className="p-4 lg:pt-10 pb-0 max-w-screen-xl mx-auto">
        <AppLogo />
      </div>

      <EmptyState
        title="Algo salió mal"
        description="No te preocupes, lo estamos arreglando."
        image={<HeroImage aria-hidden className="w-full h-full" />}
      >
        <Button onClick={handleClick} outline>
          Recargar página <Refresh className="ml-1" />
        </Button>
      </EmptyState>
    </div>
  );
}

export default ErrorPage;
