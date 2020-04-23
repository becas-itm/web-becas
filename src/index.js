import 'ui/styles/globalStyles';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryConfigProvider } from 'react-query';

import VerifyUser from 'auth/VerifyUser';
import AuthProvider from 'auth/AuthProvider';
import SplashScreen from 'ui/components/SplashScreen';
import { SnackbarProvider } from 'ui/components/Snackbar';

import App from './App';

const queryConfig = { refetchAllOnWindowFocus: false };

ReactDOM.render(
  <React.Suspense fallback={<SplashScreen />}>
    <ReactQueryConfigProvider config={queryConfig}>
      <SnackbarProvider>
        <BrowserRouter>
          <VerifyUser>
            <AuthProvider>
              <App />
            </AuthProvider>
          </VerifyUser>
        </BrowserRouter>
      </SnackbarProvider>
    </ReactQueryConfigProvider>
  </React.Suspense>,
  document.getElementById('root'),
);
