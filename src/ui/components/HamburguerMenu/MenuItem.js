import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export function MenuItem({ children, to }) {
  return (
    <Link
      to={to}
      className={classNames(
        'block h-12 px-3 rounded-sm',
        'flex items-center',
        'hover:bg-gray-200 hover:underline',
        'focus:bg-gray-200 focus:underline focus:outline-none',
        'transition-colors duration-75 ease-out',
      )}
    >
      {children}
    </Link>
  );
}
