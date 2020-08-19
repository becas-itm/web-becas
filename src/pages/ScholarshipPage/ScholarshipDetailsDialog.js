import React from 'react';

import Button from 'ui/Button';
import Markdown from 'ui/Markdown';
import { useToggle } from 'utils/hooks';
import Dialog, { Title, Actions } from 'ui/Dialog';

export default function ScholarshipDetailsDialog({ src }) {
  const [detailsOpened, toggleDetails] = useToggle();
  const okButtonRef = React.useRef();

  return (
    <>
      <Button onClick={toggleDetails} outline wide>
        Ver pasos
      </Button>
      <Dialog
        isOpen={detailsOpened}
        onDismiss={toggleDetails}
        initialFocusRef={okButtonRef}
        aria-labelledby="scholarship-instructions"
        className="w-full max-w-md"
      >
        <Title id="scholarship-instructions">Detalle de convocatoria</Title>
        <Markdown src={src} />
        <Actions className="mt-0">
          <Button outline ref={okButtonRef} onClick={toggleDetails}>
            Listo
          </Button>
        </Actions>
      </Dialog>
    </>
  );
}
