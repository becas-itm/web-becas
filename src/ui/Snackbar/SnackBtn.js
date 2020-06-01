import React from 'react';

export function SnackBtn({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ height: 36 }}
      className="rounded-sm px-3 flex-shrink-0 cursor-pointer uppercase font-semibold text-blue-300 hover:text-primary focus:text-primary hover:bg-blue-50 focus:bg-blue-50 transition-colors duration-100 ease-in-out"
      type="button"
    >
      {children}
    </button>
  );
}
