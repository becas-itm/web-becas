import React from 'react';
import AppLogo from 'ui/AppLogo';

export function HomeHeader() {
  return (
    <header className="flex items-center justify-between">
      <AppLogo children={null} />
      <a
        href="/admin"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-primary px-3 py-2 uppercase hover:underline focus:underline"
      >
        Acceder
      </a>
    </header>
  );
}
