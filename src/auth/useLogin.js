import { useState, useCallback } from 'react';
import { useAuth } from './useAuth';
import { api } from 'utils/api2';

export function useLogin() {
  const { signIn } = useAuth();
  const [isLoading, setLoading] = useState(false);

  const attempt = useCallback(
    credentials =>
      Promise.resolve(setLoading(true))
        .then(() => attemptLogin(credentials))
        .then(signIn)
        .catch(() => alert('Correo y/o contraseña no válidos'))
        .then(() => setLoading(false)),
    [signIn],
  );

  return { isLoading, attempt };
}

function attemptLogin(credentials) {
  return api.post('/api/auth/', credentials);
}
