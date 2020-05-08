import React from 'react';
import { format } from 'date-fns';
import classNames from 'classnames';
import locale from 'date-fns/locale/es';

import { useFocus } from 'utils/hooks';
import { KeyboardArrowDown } from 'ui/components/Icon';

const COLOMBIAN_DATE_FORMAT = `d 'de' MMMM 'de' yyyy`;

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
        ref={ref}
        type="date"
        {...focusHandlers(restProps)}
        onChange={handleChange}
        value={prepareValue(value) || ''}
        className={classNames(
          'w-full h-12 px-4 py-3 rounded-sm bg-white border outline-none',
          isFocused ? 'border-primary' : 'text-transparent',
        )}
        data-testid="DateInput__input"
      />
      {!isFocused && (
        <div className="absolute left-0 top-0 w-full p-1">
          <div
            className="flex items-center justify-between py-2 px-3 bg-white"
            data-testid="DateInput__placeholder"
          >
            <span className="truncate">
              {value ? formatPlaceholder(value) : placeholder}
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

function formatPlaceholder(date) {
  if (typeof date === 'string') {
    date = new Date(
      date
        .substring(0, 10)
        .split('-')
        .map(n => parseInt(n, 10)),
    );
  }

  return format(date, COLOMBIAN_DATE_FORMAT, { locale });
}

export default DateInput;
