import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './hooks';

export function PrivateRoute(props) {
  const { user, routes } = useAuth();

  if (!user) {
    return (
      <Redirect
        to={{
          pathname: routes.auth,
          state: { previousPath: props.path },
        }}
      />
    );
  }

  return <Route {...props} />;
}
