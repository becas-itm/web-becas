import 'ui/styles/globalStyles';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryConfigProvider } from 'react-query';

import ErrorPage from 'pages/ErrorPage';
import SplashScreen from 'ui/SplashScreen';
import ErrorBoundary from 'ui/ErrorBoundary';

import App from './App';

const queryConfig = { refetchAllOnWindowFocus: false };

ReactDOM.render(
  <BrowserRouter>
    <ReactQueryConfigProvider config={queryConfig}>
      <ErrorBoundary fallback={<ErrorPage />}>
        <React.Suspense fallback={<SplashScreen />}>
          <App />
        </React.Suspense>
      </ErrorBoundary>
    </ReactQueryConfigProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
