import React from 'react';

import { useToggle } from 'utils/hooks';
import Button from 'ui/Button';
import Dialog, { Title, Actions } from 'ui/Dialog';
import Markdown from 'ui/Markdown';

export default function ScholarshipDetailsDialog({ src }) {
  const [detailsOpened, toggleDetails] = useToggle();
  const okButtonRef = React.useRef();

  return (
    <>
      <div className="flex justify-center mt-2">
        <Button onClick={toggleDetails} outline>
          Ver pasos
        </Button>
      </div>
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
