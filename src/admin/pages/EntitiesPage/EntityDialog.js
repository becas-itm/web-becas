import React from 'react';
import Dialog, { Title, CloseBtn } from 'ui/Dialog';
import { EntityForm } from './EntityForm';

function EntityDialog({
  isOpen,
  onCancel,
  title,
  entity,
  onSubmit,
  isLoading,
}) {
  return (
    <Dialog
      isOpen={isOpen}
      aria-labelledby="entity-dialog"
      className="w-full max-w-sm"
      onDismiss={onCancel}
    >
      <CloseBtn onClick={onCancel} />

      <Title id="entity-dialog" className="pb-4">
        {title}
      </Title>

      <EntityForm
        entity={entity}
        onCancel={onCancel}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </Dialog>
  );
}

export { EntityDialog };
