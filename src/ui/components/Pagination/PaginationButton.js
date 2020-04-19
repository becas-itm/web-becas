import React from 'react';
import classNames from 'classnames';

export default function PaginationButton({ selected, ...restProps }) {
  const styles = classNames(
    'Pagination__pageBtn h-12 w-12 rounded-full font-semibold',
    'inline-flex items-center justify-center flex-shrink-0',
    'focus:outline-none select-none duration-100 ease-in-out',
    'text-blue-500 border border-transparent focus:border-blue-100',
    selected ? 'bg-blue-50' : 'hover:bg-blue-50 focus:bg-blue-50',
  );

  return (
    <button {...restProps} style={{ minWidth: '2.5rem' }} className={styles} />
  );
}
