import React from 'react';
import LinkButton from 'ui/LinkButton';
import EmptyState from 'ui/EmptyState';

export function RegisterCompleted() {
  return (
    <EmptyState
      title="Registro completado"
      description="Ahora puedes ingresar al sistema."
    >
      <LinkButton to="/login">Iniciar sesión</LinkButton>
    </EmptyState>
  );
}
