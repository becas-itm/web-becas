import React from 'react';
import { Close } from 'ui/Icon';
import { IconButton, SHAPE } from 'ui/IconButton';

export function CloseBtn(props) {
  return (
    <IconButton
      icon={Close}
      large={false}
      shape={SHAPE.square}
      data-reach-dialog-close=""
      {...props}
    />
  );
}

CloseBtn.defaultProps = { children: 'Cerrar ventana de diálogo' };
