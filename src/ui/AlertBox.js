import React from 'react';
import { Close } from 'ui/Icon';
import BaseAlert from '@reach/alert';

function AlertBox({ children, onClick, type = 'assertive' }) {
  const handleClick = event => {
    event.preventDefault();
    event.stopPropagation();

    if (onClick) {
      onClick();
    }
  };

  return (
    <BaseAlert type={type}>
      <div className="flex items-start bg-error text-white rounded font-semibold text-sm">
        <span className="flex-1 pl-3 py-2">{children}</span>
        {onClick && (
          <button
            type="button"
            onClick={handleClick}
            className="flex-shrink-0 p-2 opacity-75 hover:opacity-100 focus:opacity-100"
          >
            <Close />
          </button>
        )}
      </div>
    </BaseAlert>
  );
}

export default AlertBox;
