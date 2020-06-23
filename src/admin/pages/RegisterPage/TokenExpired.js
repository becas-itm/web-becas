import React from 'react';
import LinkButton from 'ui/LinkButton';
import EmptyState from 'ui/EmptyState';

export function TokenExpired() {
  return (
    <EmptyState
      mood="ko"
      title="Enlace caducado"
      description="Comuníquese con el administrador para la creación de un nuevo usuario."
    >
      <LinkButton to="/">Volver al inicio</LinkButton>
    </EmptyState>
  );
}
