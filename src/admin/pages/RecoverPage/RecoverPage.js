import React from 'react';
import { useMutation } from 'react-query';

import api from 'utils/api';
import AlertBox from 'ui/AlertBox';
import AuthTemplate from 'admin/ui/AuthTemplate';

import { RecoverForm } from './RecoverForm';
import { RecoverRequestSent } from './RecoverRequestSent';

export default function RecoverPage() {
  const [email, setEmail] = React.useState('');
  const [requestRecover, { status, error, reset }] = useMutation(
    account => api.post('/auth/recover/', account),
    { onSuccess: (_, { email }) => setEmail(email) },
  );
  const isLoading = status === 'loading';

  const handleSubmit = account => requestRecover(account);

  return (
    <AuthTemplate
      title="Recuperar cuenta"
      alert={
        error && (
          <AlertBox onClick={reset}>
            <span data-testid="error">
              Ocurrió un error inesperado. Vuelve a intentarlo.
            </span>
          </AlertBox>
        )
      }
    >
      {status === 'success' ? (
        <RecoverRequestSent email={email} />
      ) : (
        <RecoverForm onSubmit={handleSubmit} isLoading={isLoading} />
      )}
    </AuthTemplate>
  );
}
