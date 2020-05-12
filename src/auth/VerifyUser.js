import React from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

import token from './token';
import { ADMIN_PATH } from './constants';
import { fetchSilentRefresh } from './fetchSilentRefresh';

export default function VerifyUser({ children, ...restProps }) {
  const location = useLocation();
  const isPrivateRoute = location.pathname.startsWith(ADMIN_PATH);

  let { data: user } = useQuery(
    !token.exists && isPrivateRoute ? '/api/auth/refresh-token/' : null,
    fetchSilentRefresh,
    {
      suspense: true,
      retry: false,
      cacheTime: 0,
    },
  );

  if (user) {
    const { token: accessToken, expiresIn, ...verifiedUser } = user;
    token.setToken(accessToken, expiresIn);
    user = verifiedUser;
  }

  return React.cloneElement(children, {
    ...restProps,
    user,
  });
}
