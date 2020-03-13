import React from 'react';
import { Provider } from 'use-http';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import SearchPage from 'pages/SearchPage';
import ScholarshipPage from 'pages/ScholarshipPage';
import NotFoundPage from 'pages/NotFoundPage';
import DisclaimerPage from 'pages/DisclaimerPage';

function App() {
  return (
    <Provider options={{ cachePolicy: 'no-cache' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buscar" element={<SearchPage />} />
          <Route path="/terminos" element={<DisclaimerPage />} />
          <Route path="/convocatoria/:id" element={<ScholarshipPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
