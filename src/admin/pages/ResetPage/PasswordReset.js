import React from 'react';
import { Link } from 'react-router-dom';
import { SpeechBubble } from 'react-kawaii';

import { AuthCard } from 'admin/ui/AuthTemplate';

export function PasswordReset() {
  return (
    <AuthCard>
      <div className="flex flex-col items-center text-center">
        <SpeechBubble size={96} mood="excited" color="#83D1FB" />
        <p className="mt-3">¡Contraseña restablecida con éxito!</p>
        <Link
          to="/login"
          className="mt-2 p-2 text-primary text-base hover:underline"
        >
          Iniciar sesión
        </Link>
      </div>
    </AuthCard>
  );
}
