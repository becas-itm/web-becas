import React from 'react';
import { Ghost } from 'react-kawaii';
import Button from 'ui/components/Button';

export function EmptyEntitiesState({ onNewClick }) {
  return (
    <div className="inline-block text-center" data-testid="EmptyEntitiesState">
      <Ghost
        size={160}
        mood="blissful"
        color="#E0E4E8"
        className="inline-block"
      />

      <p className="font-mont text-3xl mt-4">Sin entidades</p>
      <p className="text-medium text-lg">Crea una entidad para comenzar.</p>

      <Button
        onClick={onNewClick}
        outline
        className="mt-3 uppercase"
        data-testid="EmptyEntitiesState__button"
      >
        Crear entidad
      </Button>
    </div>
  );
}
