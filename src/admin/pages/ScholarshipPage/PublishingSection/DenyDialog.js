import React from 'react';
import Textarea from 'ui/Textarea';
import Button, { COLOR } from 'ui/Button';
import Dialog, { Title, Actions } from 'ui/Dialog';

export function DenyDialog({ isOpen, onCancel, onDeny, isLoading }) {
  const cancelButtonRef = React.useRef(null);

  const [reason, setReason] = React.useState('');
  const onChange = event => setReason(event.target.value);

  React.useEffect(() => setReason(''), [isOpen]);

  const handleSubmit = async event => {
    event.preventDefault();
    event.stopPropagation();
    onDeny(reason);
  };

  const handleDismiss = () => {
    if (!isLoading) {
      onCancel();
    }
  };

  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={handleDismiss}
      initialFocusRef={cancelButtonRef}
      aria-labelledby="deny-scholarship"
      className="w-full max-w-sm"
    >
      <form onSubmit={handleSubmit}>
        <Title id="deny-scholarship">Rechazar convocatoria</Title>
        <Textarea
          value={reason}
          onChange={onChange}
          readOnly={isLoading}
          placeholder="Indica una razón"
          rows="2"
          className="mb-2"
        />
        <Actions>
          <Button
            onClick={onCancel}
            ref={cancelButtonRef}
            color={COLOR.secondary}
            disabled={isLoading}
            data-testid="cancelDeny"
          >
            Cancelar
          </Button>
          <Button
            isLoading={isLoading}
            type="submit"
            color={COLOR.danger}
            className="ml-3"
            data-testid="confirmDeny"
          >
            Rechazar
          </Button>
        </Actions>
      </form>
    </Dialog>
  );
}
