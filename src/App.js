import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const DisclaimerPage = lazy(() => import('pages/DisclaimerPage'));
const ScholarshipPage = lazy(() => import('pages/ScholarshipPage'));

const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

function App() {
  return (
    <Switch>
      <Route exact path="/" children={<HomePage />} />
      <Route exact path="/buscar" children={<SearchPage />} />
      <Route exact path="/terminos" children={<DisclaimerPage />} />
      <Route exact path="/convocatoria/:id" children={<ScholarshipPage />} />
      <Route path="*" children={<NotFoundPage />} />
    </Switch>
  );
}

export default App;
