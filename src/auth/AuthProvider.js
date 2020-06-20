import React from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from './AuthContext';
import { DEFAULT_ROUTES } from './constants';

export function AuthProvider({
  initialUser = null,
  routes = DEFAULT_ROUTES,
  children,
}) {
  const history = useHistory();
  const [user, setUser] = React.useState(initialUser);

  const auth = React.useMemo(
    () => ({
      user,
      routes: { ...routes, ...DEFAULT_ROUTES },
      login: user => {
        setUser(user);
        const redirectPath =
          history.location.state?.previousPath ?? routes.afterLogin;
        history.push(redirectPath);
      },
      logout: () => {
        setUser(null);
        history.push(routes.afterLogout);
      },
    }),
    [user, history, routes],
  );

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
