import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useLocation, matchPath } from 'react-router-dom';

import { REFRESH_ENDPOINT } from './fetchSilentRefresh';

export function VerifyToken({ fetcher, excludedRoutes = [], children }) {
  const { pathname } = useLocation();

  const skipVerify = useMemo(
    () =>
      excludedRoutes.some(route => {
        const match = matchPath(pathname, route);

        // skip not found routes
        if (match && match.path === '*') {
          return true;
        }

        return !!match;
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [excludedRoutes],
  );

  const { data = null } = useQuery(
    skipVerify ? null : REFRESH_ENDPOINT,
    fetcher,
    {
      cacheTime: 0,
      retry: false,
      suspense: true,
    },
  );

  return children({ user: data });
}
