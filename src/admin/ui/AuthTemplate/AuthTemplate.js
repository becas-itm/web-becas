import React from 'react';
import AppLogo from 'ui/AppLogo';
import { ThreeRowTemplate } from 'ui/ThreeRowTemplate';

function AuthTemplate({ title, alert, children }) {
  return (
    <ThreeRowTemplate>
      <div className="pt-6 flex flex-col items-center">
        <div className="w-full max-w-sm">
          <header className="w-full flex items-center">
            <AppLogo children={null} />
            <div className="pl-3 text-lg" data-testid="pageTitle">
              {title}
            </div>
          </header>

          {alert && <div className="mt-6">{alert}</div>}

          <div className="mt-8">{children}</div>
        </div>
      </div>
    </ThreeRowTemplate>
  );
}

export default AuthTemplate;
