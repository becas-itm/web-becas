import React from 'react';
import Input from 'ui/Input';
import { KeyboardArrowDown, Close } from 'ui/Icon';

import { useCombobox } from './Combobox';
import { usePopover } from './PopoverProvider';

export function ComboboxInput(props) {
  const {
    isOpen,
    inputValue,
    getInputProps,
    clearSelection,
    getToggleButtonProps,
  } = useCombobox();
  const { setReferenceElement } = usePopover();

  return (
    <div>
      <Input
        wide
        {...getInputProps({ ...props, ref: setReferenceElement })}
        endIcon={
          <span className="pr-2">
            {inputValue ? (
              <button
                onClick={event => {
                  event.preventDefault();
                  event.stopPropagation();
                  clearSelection();
                }}
              >
                <Close />
              </button>
            ) : (
              <button {...getToggleButtonProps()}>
                <KeyboardArrowDown
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
                  className="text-medium"
                />
              </button>
            )}
          </span>
        }
      />
    </div>
  );
}
