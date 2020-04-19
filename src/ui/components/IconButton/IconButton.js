import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

export const SHAPE = {
  rounded: 'rounded-full',
  square: 'rounded-sm',
  simple: 'text-medium hover:text-active focus:text-active active:text-medium',
};

function IconButton({
  icon: Icon,
  shape,
  large,
  children,
  className,
  ...restProps
}) {
  const classes = classNames(
    'inline-flex items-center justify-center flex-shrink-0',
    'focus:outline-none select-none duration-100 ease-in-out',
    'border border-transparent',
    {
      'text-primary hover:bg-blue-50 focus:bg-blue-50 focus:border-blue-100':
        shape !== SHAPE.simple,
    },
    large ? 'p-3' : 'p-2',
    shape,
    className,
  );

  return (
    <button {...restProps} className={classes}>
      <Icon regular />
      <span className="sr-only">{children}</span>
    </button>
  );
}

IconButton.defaultProps = {
  shape: SHAPE.rounded,
  type: 'button',
  large: true,
};

IconButton.propTypes = {
  icon: propTypes.elementType,
  large: propTypes.bool.isRequired,
  children: propTypes.string.isRequired,
  shape: propTypes.oneOf(Object.values(SHAPE)),
};

export default IconButton;
