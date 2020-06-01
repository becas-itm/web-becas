import React from 'react';
import Button from 'ui/Button';
import AppLogo from 'ui/AppLogo';
import { Refresh } from 'ui/Icon';
import PageRibbon from 'ui/PageRibbon';
import { ReactComponent as HeroImage } from './undrawBugFixing.svg';

function ErrorPage() {
  const handleClick = () => window.location.reload();
  return (
    <div>
      <PageRibbon />

      <div className="p-4 lg:pt-10 pb-0 max-w-screen-xl mx-auto">
        <AppLogo />
      </div>

      <main className="flex flex-col items-center text-center px-4 mt-12">
        <HeroImage
          style={{ maxWidth: 248 }}
          className="w-full h-auto"
          aria-hidden
        />
        <h1 className="font-mont text-4xl mt-6">Algo salió mal</h1>
        <p className="text-medium text-xl mt-2">
          No te preocupes, estamos trabajando en ello.
        </p>

        <Button onClick={handleClick} outline className="mt-4">
          Recargar página <Refresh className="ml-2" />
        </Button>
      </main>
    </div>
  );
}

export default ErrorPage;
