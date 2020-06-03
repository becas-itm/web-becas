import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import { SpeechBubble } from 'react-kawaii';

import { post } from 'utils/api';
import AlertBox from 'ui/AlertBox';
import AuthTemplate from 'admin/ui/AuthTemplate';

import { RecoverForm } from './RecoverForm';

export default function RecoverPage() {
  const [email, setEmail] = React.useState('');
  const [requestRecover, { status, error, reset }] = useMutation(
    account => post('/api/auth/recover/', account),
    { onSuccess: (_, { email }) => setEmail(email) },
  );
  const isLoading = status === 'loading';

  const handleSubmit = account => requestRecover(account);

  return (
    <AuthTemplate title="Recuperar cuenta">
      {status !== 'success' && (
        <h1 className="text-2xl mb-4">Recuperar cuenta</h1>
      )}

      {error && (
        <AlertBox onClick={reset}>
          Ocurrió un error inesperado. Vuelve a intentarlo.
        </AlertBox>
      )}

      {status === 'success' ? (
        <div className="flex flex-col items-center text-center">
          <SpeechBubble size={96} mood="excited" color="#83D1FB" />
          <p className="mt-3 text-lg">Te hemos enviado un enlace a</p>
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
      ) : (
        <RecoverForm onSubmit={handleSubmit} isLoading={isLoading} />
      )}
    </AuthTemplate>
  );
}
