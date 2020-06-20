import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

export function VerifyToken({ fetcher, excludedRoutes = [], children }) {
  const { pathname } = useLocation();

  const { data = null } = useQuery(
    excludedRoutes.includes(pathname) ? null : '/',
    fetcher,
    {
      cacheTime: 0,
      retry: false,
      suspense: true,
    },
  );

  return children({ user: data });
}
