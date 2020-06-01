import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from 'auth/useAuth';
import { LOGIN_PATH } from 'auth/constants';

function PrivateRoute(props) {
  const { user } = useAuth();

  if (!user) {
    return <Redirect to={LOGIN_PATH} />;
  }

  return <Route {...props} />;
}

export default PrivateRoute;
