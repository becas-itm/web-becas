import React from 'react';
import { Ghost } from 'react-kawaii';

/**
 * @param {{
 *   title: string,
 *   description?: string,
 *   mood: import('react-kawaii').KawaiiProps['mood'],
 *   image?: any,
 * }} param0
 */
function EmptyState({
  title,
  description,
  children,
  image,
  mood = 'blissful',
}) {
  return (
    <main className="flex flex-col items-center justify-center text-center px-4 mt-10">
      <div
        style={{ maxWidth: 248 }}
        className="w-full h-auto flex justify-center"
      >
        {image || <Ghost size={160} mood={mood} color="#E0E4E8" />}
      </div>
      <h1 className="font-mont text-4xl mt-4">{title}</h1>
      {description && <p className="text-medium text-xl mt-2">{description}</p>}
      {children && <div className="mt-4">{children}</div>}
    </main>
  );
}

export default EmptyState;
