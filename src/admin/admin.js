import 'ui/styles/globalStyles';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryConfigProvider } from 'react-query';

import token from 'auth/token';
import { VerifyToken } from 'auth/VerifyToken';
import { RefreshToken } from 'auth/RefreshToken';
import { AuthProvider } from 'auth/AuthProvider';
import { fetchSilentRefresh } from 'auth/fetchSilentRefresh';

import ErrorPage from 'pages/ErrorPage';
import SplashScreen from 'ui/SplashScreen';
import ErrorBoundary from 'ui/ErrorBoundary';
import { SnackbarProvider } from 'ui/Snackbar';

import App, { AUTH_ROUTES, PUBLIC_ROUTES } from './App';

const queryConfig = { refetchAllOnWindowFocus: false };

ReactDOM.render(
  <BrowserRouter basename="/admin">
    <ReactQueryConfigProvider config={queryConfig}>
      <ErrorBoundary fallback={<ErrorPage />}>
        <React.Suspense fallback={<SplashScreen />}>
          <SnackbarProvider>
            <VerifyToken
              fetcher={fetchSilentRefresh}
              excludedRoutes={PUBLIC_ROUTES}
            >
              {({ user }) => (
                <AuthProvider initialUser={user} routes={AUTH_ROUTES}>
                  <RefreshToken
                    fetcher={fetchSilentRefresh}
                    onRefresh={token.processPayload}
                  />
                  <App />
                </AuthProvider>
              )}
            </VerifyToken>
          </SnackbarProvider>
        </React.Suspense>
      </ErrorBoundary>
    </ReactQueryConfigProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
