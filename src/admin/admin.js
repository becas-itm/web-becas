import 'ui/styles/globalStyles';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryConfigProvider } from 'react-query';

import ErrorPage from 'pages/ErrorPage';
import VerifyUser from 'auth/VerifyUser';
import AuthProvider from 'auth/AuthProvider';
import SplashScreen from 'ui/SplashScreen';
import ErrorBoundary from 'ui/ErrorBoundary';
import { SnackbarProvider } from 'ui/Snackbar';

import App from './App';

const queryConfig = { refetchAllOnWindowFocus: false };

ReactDOM.render(
  <ErrorBoundary fallback={<ErrorPage />}>
    <React.Suspense fallback={<SplashScreen />}>
      <ReactQueryConfigProvider config={queryConfig}>
        <SnackbarProvider>
          <BrowserRouter basename="/admin">
            <VerifyUser>
              <AuthProvider>
                <App />
              </AuthProvider>
            </VerifyUser>
          </BrowserRouter>
        </SnackbarProvider>
      </ReactQueryConfigProvider>
    </React.Suspense>
  </ErrorBoundary>,
  document.getElementById('root'),
);
