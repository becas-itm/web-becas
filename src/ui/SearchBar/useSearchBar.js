import { useRef, useState, useEffect, useMemo } from 'react';

export function useSearchBar({ defaultValue = '', onSubmit }) {
  const inputRef = useRef(null);
  const [value, setValue] = useState(defaultValue);

  useEffect(
    function resetInitialValue() {
      setValue(defaultValue);
    },
    [defaultValue],
  );

  return useMemo(
    () => ({
      value,
      inputRef,
      handleChange: event => {
        setValue(event.target.value);
      },
      handleKeyDown: event => {
        // eslint-disable-next-line default-case
        switch (event.key) {
          case 'Escape':
            setValue('');
            break;

          case 'Enter':
            onSubmit && onSubmit(value);
            break;
        }
      },
      handleClearClick: () => {
        setValue('');
        inputRef.current.focus();
      },
    }),
    [value, onSubmit],
  );
}
