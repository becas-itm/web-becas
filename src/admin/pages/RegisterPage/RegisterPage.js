import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';

import Spinner from 'ui/Spinner';
import AlertBox from 'ui/AlertBox';
import AuthTemplate from 'admin/ui/AuthTemplate';

import * as api from './RegisterPage.api';
import { RegisterForm } from './RegisterForm';
import { TokenExpired } from './TokenExpired';
import { RegisterCompleted } from './RegisterCompleted';

const PAGE_TITLE = 'Completar registro';

function PageFetcher() {
  const { token } = useParams();

  const { data: user, isFetching, error } = useQuery([token], api.fetchUser, {
    retry: false,
  });

  if (!isFetching && !error) {
    return <RegisterPage user={user} token={token} />;
  }

  return (
    <AuthTemplate title={PAGE_TITLE}>
      {isFetching && (
        <div className="text-center">
          <Spinner />
        </div>
      )}

      {!isFetching && error && <TokenExpired />}
    </AuthTemplate>
  );
}

function RegisterPage({ user, token }) {
  const [handleRegister, result] = useMutation(api.finishRegister);

  return (
    <AuthTemplate
      title={PAGE_TITLE}
      alert={
        result.error && (
          <AlertBox onClick={result.reset}>
            <span data-testid="error">
              Ocurrió un error inesperado. Vuelve a intentarlo.
            </span>
          </AlertBox>
        )
      }
    >
      {result.status === 'success' ? (
        <RegisterCompleted />
      ) : (
        <RegisterForm
          user={user}
          token={token}
          isLoading={result.status === 'loading'}
          onSubmit={handleRegister}
        />
      )}
    </AuthTemplate>
  );
}

export default PageFetcher;
