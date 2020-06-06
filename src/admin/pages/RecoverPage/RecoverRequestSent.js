import React from 'react';
import { Link } from 'react-router-dom';
import { SpeechBubble } from 'react-kawaii';

import { AuthCard } from 'admin/ui/AuthTemplate';

export function RecoverRequestSent({ email }) {
  return (
    <AuthCard>
      <div className="flex flex-col items-center text-center">
        <SpeechBubble size={96} mood="excited" color="#83D1FB" />
        <p className="mt-3">Te hemos enviado un enlace a</p>
        <p className="font-semibold" data-testid="submittedEmail">
          {email}
        </p>
        <Link
          to="/login"
          className="mt-2 p-2 text-primary text-base hover:underline"
        >
          Volver a Inicio de sesión
        </Link>
      </div>
    </AuthCard>
  );
}
