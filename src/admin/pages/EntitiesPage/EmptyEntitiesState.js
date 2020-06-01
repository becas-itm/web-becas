import React from 'react';
import Button from 'ui/Button';
import EmptyState from 'ui/EmptyState';

export function EmptyEntitiesState({ onNewClick }) {
  return (
    <div data-testid="EmptyEntitiesState">
      <EmptyState
        title="Entidades"
        description="Crea una entidad para comenzar."
      >
        <Button
          onClick={onNewClick}
          outline
          data-testid="EmptyEntitiesState__button"
        >
          Crear
        </Button>
      </EmptyState>
    </div>
  );
}
