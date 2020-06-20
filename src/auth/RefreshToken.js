import React from 'react';
import { useAuth } from './hooks';

export function RefreshToken({ fetcher, onRefresh }) {
  const auth = useAuth();

  const initialExpiresIn = auth.user?.expiresIn ?? 0;
  const [expiresIn, setExpiration] = React.useState(initialExpiresIn);

  const timerRef = React.useRef();

  React.useEffect(() => {
    if (initialExpiresIn && initialExpiresIn !== expiresIn) {
      setExpiration(initialExpiresIn);
    }
  }, [initialExpiresIn, expiresIn]);

  React.useEffect(() => {
    if (!expiresIn) {
      return;
    }

    const refreshToken = async () => {
      const payload = await fetcher();
      if (payload) {
        setExpiration(payload.expiresIn);
        onRefresh && onRefresh(payload);
      } else {
        auth.logout();
        clearInterval(timerRef.current);
      }
    };

    const intervalId = setInterval(refreshToken, expiresIn);
    timerRef.current = intervalId;
    return () => clearInterval(intervalId);
  }, [expiresIn, fetcher, auth, onRefresh]);

  return null;
}
