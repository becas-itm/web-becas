import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';

import api from 'utils/api';
import AlertBox from 'ui/AlertBox';
import AuthTemplate from 'admin/ui/AuthTemplate';

import { ResetForm } from './ResetForm';
import { TokenExpired } from './TokenExpired';
import { PasswordReset } from './PasswordReset';

function resetPassword({ token, ...data }) {
  return api.put(`/auth/reset/${token}/`, data);
}

function ResetPage() {
  const { token } = useParams();

  const { data: user, error: errorToken } = useQuery(
    ['/auth/reset/', token],
    (url, token) => api.get(`${url}/${token}/`),
    { retry: false, suspense: false },
  );

  const [mutate, { status, error, reset }] = useMutation(resetPassword);
  const handleReset = data => mutate({ ...data, token });

  const renderContent = () => {
    if (status === 'success') {
      return <PasswordReset />;
    }

    return (
      <ResetForm
        user={user}
        onSubmit={handleReset}
        isLoading={status === 'loading'}
      />
    );
  };

  return (
    <AuthTemplate
      title="Restablecer contraseña"
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
      {errorToken || !user ? <TokenExpired /> : renderContent()}
    </AuthTemplate>
  );
}

export default ResetPage;
