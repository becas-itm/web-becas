import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { useFocus } from 'utils/hooks';

import { RenderIcon } from './RenderIcon';

const Input = React.forwardRef(function Input(
  { wide, className, endIcon, RenderIcon, inputClass = '', ...restProps },
  ref,
) {
  const [isFocused, focusHandlers] = useFocus(restProps.autoFocus);

  return (
    <div className={getStyles({ wide, endIcon, isFocused, className })}>
      <input
        ref={ref}
        {...restProps}
        {...focusHandlers(restProps)}
        className={`w-full h-full bg-transparent focus:outline-none pl-4 ${inputClass}`}
      />
      {endIcon ? <RenderIcon>{endIcon}</RenderIcon> : null}
    </div>
  );
});

function getStyles({ wide, endIcon, isFocused, className }) {
  return classNames(
    'relative inline-flex items-center rounded-sm h-12 bg-white border',
    {
      'w-full': wide,
      'pr-4': !endIcon,
      'border-primary': isFocused,
    },
    className,
  );
}

Input.defaultProps = {
  wide: true,
  RenderIcon,
  type: 'input',
  autoFocus: false,
  'data-testid': 'Input',
};

Input.propTypes = {
  wide: propTypes.bool,
  className: propTypes.string,
  endIcon: propTypes.element,
};

export default Input;
