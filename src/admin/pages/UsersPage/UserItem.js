import React from 'react';
import Avatar from 'ui/Avatar';

export function UserItem({ displayName, email }) {
  return (
    <article
      className="flex bg-white rounded-sm pl-6 pr-8 py-5"
      style={{
        boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.12)',
      }}
    >
      <div>
        <Avatar name={displayName} />
      </div>

      <div className="flex-1 ml-5 break-all">
        <h1 className="text-lg leading-none">{displayName}</h1>
        <p className="text-medium leading-none mt-2">{email}</p>
      </div>
    </article>
  );
}
