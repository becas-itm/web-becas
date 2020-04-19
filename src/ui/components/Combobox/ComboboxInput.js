import React from 'react';
import Input from 'ui/components/Input';
import { KeyboardArrowDown, Close } from 'ui/components/Icon';

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
        {...props}
        {...getInputProps({ ref: setReferenceElement })}
        endIcon={
          inputValue ? (
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
              />
            </button>
          )
        }
      />
    </div>
  );
}
