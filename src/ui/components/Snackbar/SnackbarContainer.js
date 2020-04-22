import React from 'react';
import { Snackbar } from './Snackbar';

const SNACK_VISIBLE_TIME = 4000;

const styles = {
  left: '50%',
  maxWidth: 512,
  bottom: '1.5rem',
  transform: 'translateX(-50%)',
};

export const SnackbarContainer = React.forwardRef(function SnackbarContainer(
  _,
  ref,
) {
  const [snack, setSnack] = React.useState(null);
  const close = () => setSnack(null);
  const show = message => setSnack({ message, timeout: SNACK_VISIBLE_TIME });

  React.useImperativeHandle(ref, () => ({ show }), []);

  return (
    snack && (
      <div style={styles} className="fixed flex w-full px-4">
        <Snackbar {...snack} onTimeout={close} onActionClick={close} />
      </div>
    )
  );
});
