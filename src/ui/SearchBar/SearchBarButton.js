import React from 'react';
import propTypes from 'prop-types';

export function SearchBarButton({ icon: Icon, children, ...restProps }) {
  return (
    <button
      {...restProps}
      className="p-3 text-primary flex items-center justify-center flex-shrink-0 focus:outline-none"
    >
      <Icon />
      <span className="sr-only">{children}</span>
    </button>
  );
}

SearchBarButton.defaultProps = { type: 'button' };

SearchBarButton.propTypes = {
  icon: propTypes.elementType.isRequired,
  children: propTypes.string.isRequired,
};
