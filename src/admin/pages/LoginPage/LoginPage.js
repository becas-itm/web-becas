import React from 'react';
import { useMutation } from 'react-query';

import token from 'auth/token';
import api from 'utils/api';
import { useAuth } from 'auth/hooks';
import { ThreeRowTemplate } from 'ui/ThreeRowTemplate';

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
    <ThreeRowTemplate header={null}>
      <div className="flex justify-center mt-12 lg:mt-20">
        <LoginCard onSubmit={handleSubmit} isLoading={status === 'loading'} />
      </div>
    </ThreeRowTemplate>
  );
}
