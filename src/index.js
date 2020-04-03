import '@reach/listbox/styles.css';
import 'ui/components/Listbox/Listbox.css';

import '@reach/dialog/styles.css';
import 'ui/components/Dialog/Dialog.css';

import '@reach/combobox/styles.css';
import 'ui/styles/combobox.css';

import './styles.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryConfigProvider } from 'react-query';

import VerifyUser from 'auth/VerifyUser';
import AuthProvider from 'auth/AuthProvider';
import SplashScreen from 'ui/components/SplashScreen';

const App = React.lazy(() => import('./App'));

const queryConfig = { refetchAllOnWindowFocus: false };

ReactDOM.render(
  <React.Suspense fallback={<SplashScreen />}>
    <ReactQueryConfigProvider config={queryConfig}>
      <BrowserRouter>
        <VerifyUser>
          <AuthProvider>
            <App />
          </AuthProvider>
        </VerifyUser>
      </BrowserRouter>
    </ReactQueryConfigProvider>
  </React.Suspense>,
  document.getElementById('root'),
);
