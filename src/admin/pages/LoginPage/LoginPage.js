import React from 'react';
import { useMutation } from 'react-query';

import api from 'utils/api';
import token from 'auth/token';
import { useAuth } from 'auth/hooks';

import { AppLogo } from 'ui/AppLogo';
import PageRibbon from 'ui/PageRibbon';
import { AppFooter } from 'ui/AppFooter';

import LoginCard from './LoginCard';

export default function LoginPage() {
  const auth = useAuth();

  const [handleSubmit, { status }] = useMutation(
    credentials => api.post('/auth/', credentials),
    {
      onSuccess: payload => {
        auth.login(payload);
        token.processPayload(payload);
      },
      onError: () => alert('Correo y/o contraseña no válidos'),
    },
  );

  return (
    <>
      <div
        className="min-h-screen flex flex-col"
        style={{ background: '#fafdff' }}
      >
        <PageRibbon />

        <div className="flex-1">
          <div className="flex flex-col items-center mt-12 lg:mt-20">
            <div className="mb-8">
              <AppLogo children={null} />
            </div>

            <LoginCard
              onSubmit={handleSubmit}
              isLoading={status === 'loading'}
            />
          </div>
        </div>
      </div>

      <AppFooter />
    </>
  );
}
