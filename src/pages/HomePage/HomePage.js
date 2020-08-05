import React from 'react';

import AppFooter from 'ui/AppFooter';
import PageRibbon from 'ui/PageRibbon';

import { HomeHeader } from './HomeHeader';
import { HeroSection } from './HeroSection';

export default function HomePage() {
  return (
    <>
      <div
        className="min-h-screen flex flex-col"
        style={{ background: '#fafdff' }}
      >
        <PageRibbon />

        <div className="w-full max-w-xl lg:max-w-5xl mx-auto mt-2 lg:mt-8 px-4">
          <HomeHeader />
        </div>

        <div className="flex-1">
          <div className="w-full max-w-xl lg:max-w-5xl mx-auto mt-4 lg:mt-12 px-4 pb-8">
            <HeroSection />
          </div>
        </div>
      </div>

      <AppFooter />
    </>
  );
}
