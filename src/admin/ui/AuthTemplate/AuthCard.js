import React from 'react';

export const AuthCard = React.memo(function AuthCard({ children }) {
  return (
    <div className="w-full px-8 pb-8 pt-5 bg-white rounded shadow-sm">
      {children}
    </div>
  );
});
