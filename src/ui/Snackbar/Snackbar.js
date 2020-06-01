import React from 'react';
import { useTimeoutFn } from 'react-use';

import { Snack } from './Snack';
import { SnackBtn } from './SnackBtn';
import { SnackText } from './SnackText';
import { useMultiline } from './hooks';

export function Snackbar({
  timeout,
  message,
  onTimeout,
  onActionClick,
  action = 'Ok',
}) {
  useTimeoutFn(onTimeout, timeout);
  const [isMultiline, textRef] = useMultiline();
  return (
    <Snack>
      <SnackText ref={textRef} isMultiline={isMultiline}>
        {message}
      </SnackText>
      <SnackBtn onClick={onActionClick}>{action}</SnackBtn>
    </Snack>
  );
}
