import React from 'react';
import classNames from 'classnames';

import { useFocus } from 'utils/hooks';
import { KeyboardArrowDown } from 'ui/Icon';

import { formatDate } from './formatDate';

const DateInput = React.forwardRef(function DateInput(
  {
    value: initialValue = '',
    defaultValue = '',
    placeholder = 'Seleccionar',
    className,
    onChange,
    ...restProps
  },
  ref,
) {
  const [value, setValue] = React.useState(initialValue || defaultValue);
  const [isFocused, focusHandlers] = useFocus();

  const handleChange = event => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  React.useEffect(() => {
    setValue(initialValue || defaultValue);
  }, [initialValue, defaultValue]);

  return (
    <label
      data-testid="DateInput"
      className={classNames('block relative', className)}
    >
      <input
        data-testid="DateInput__input"
        {...restProps}
        {...focusHandlers(restProps)}
        ref={ref}
        type="date"
        onChange={handleChange}
        value={prepareValue(value) || ''}
        className={classNames(
          'w-full h-12 px-4 py-3 rounded-sm border outline-none',
          isFocused ? 'border-primary' : 'text-transparent',
          {
            'bg-white': !restProps.disabled,
            'bg-gray-100 cursor-not-allowed': restProps.disabled,
          },
        )}
      />
      {!isFocused && (
        <div className="absolute left-0 top-0 w-full p-1">
          <div
            className={classNames(
              'flex items-center justify-between py-2 px-3',
              restProps.disabled
                ? 'bg-gray-100 cursor-not-allowed'
                : 'bg-white',
            )}
            data-testid="DateInput__placeholder"
          >
            <span className="truncate">
              {value ? formatDate(value) : placeholder}
            </span>
            <KeyboardArrowDown className="ml-2" />
          </div>
        </div>
      )}
    </label>
  );
});

function prepareValue(stringOrDate) {
  if (stringOrDate instanceof window.Date) {
    stringOrDate = stringOrDate.toISOString();
  }

  return stringOrDate.substring(0, 10);
}

export default DateInput;
