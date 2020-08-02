import React from 'react';
import { Link } from 'react-router-dom';
import simpleLogo from './simpleLogo-2x.png';
import fullLogo from './fullLogo-2x.png';

function AppLogo({ children = 'Becas' }) {
  return (
    <Link
      to="/"
      data-testid="AppLogo"
      className="inline-flex items-center flex-shrink-0"
    >
      <img
        src={children ? simpleLogo : fullLogo}
        className="object-cover"
        style={{ width: children ? 141 : 255, height: 80 }}
        alt="Instituto Tecnológico Metropolitano"
      />
      {children && (
        <div
          className="ml-1 pl-3 border-l flex items-center text-xl"
          style={{ height: 49, color: '#1f2f69', borderColor: '#8f97b4' }}
        >
          {children}
        </div>
      )}
    </Link>
  );
}

export default AppLogo;
