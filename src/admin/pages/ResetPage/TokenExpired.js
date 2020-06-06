import React from 'react';
import { AuthCard } from 'admin/ui/AuthTemplate';

export function TokenExpired() {
  return (
    <AuthCard>
      <h1 className="text-xl mb-2">Enlace caducado</h1>
      <p className="text-medium">
        Comuníquese con el administrador para la creación de un nuevo usuario.
      </p>
    </AuthCard>
  );
}
