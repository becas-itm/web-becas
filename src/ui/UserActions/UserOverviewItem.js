import React from 'react';
import Avatar from 'ui/Avatar';

export function UserOverviewItem({ userName, email }) {
  return (
    <div className="flex items-start pl-6 pt-6 pr-4">
      <Avatar name={userName} size={40} />
      <div className="ml-3 text-base">
        <div className="leading-none">{userName}</div>
        <p className="leading-none text-medium mt-1">{email}</p>
      </div>
    </div>
  );
}
