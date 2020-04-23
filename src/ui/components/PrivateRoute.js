import React from 'react';
import { Route, Navigate } from 'react-router-dom';

import { useAuth } from 'auth/useAuth';
import { LOGIN_PATH } from 'auth/constants';
import { useSnackbar } from 'ui/components/Snackbar';

function PrivateRoute(props) {
  const { user } = useAuth();
  const snack = useSnackbar();

  if (!user) {
    snack.show('Inicia sesión para continuar.');
    return <Navigate to={LOGIN_PATH} replace />;
  }

  return <Route {...props} />;
}

export default PrivateRoute;
