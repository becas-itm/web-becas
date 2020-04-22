import React from 'react';

export function Snack({ children }) {
  return (
    <div
      style={{ minHeight: 56, background: '#212121' }}
      className="w-full pr-4 flex items-center shadow-lg rounded"
    >
      {children}
    </div>
  );
}
