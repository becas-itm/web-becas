import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from 'ui/components/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const DisclaimerPage = lazy(() => import('pages/DisclaimerPage'));
const ScholarshipPage = lazy(() => import('pages/ScholarshipPage'));

const LoginPage = lazy(() => import('pages/LoginPage'));
const ResetPage = lazy(() => import('pages/ResetPage'));
const RecoverPage = lazy(() => import('pages/RecoverPage'));
const CompleteRegisterPage = lazy(() => import('pages/CompleteRegisterPage'));

const AdminPage = lazy(() => import('pages/admin/HomePage'));
const UsersPage = lazy(() => import('pages/UsersPage'));
const EntitiesPage = lazy(() => import('pages/admin/EntitiesPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));
const PendingScholarshipsPage = lazy(() =>
  import('pages/PendingScholarshipsPage'),
);

const AdminScholarshipPage = lazy(() => import('pages/admin/ScholarshipPage'));
const CreateScholarshipPage = lazy(() =>
  import('pages/admin/CreateScholarshipPage'),
);

const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

function App() {
  return (
    <Switch>
      <Route exact path="/" children={<HomePage />} />
      <Route exact path="/buscar" children={<SearchPage />} />
      <Route exact path="/terminos" children={<DisclaimerPage />} />
      <Route exact path="/convocatoria/:id" children={<ScholarshipPage />} />

      <Route exact path="/login" children={<LoginPage />} />
      <Route exact path="/recuperar" children={<RecoverPage />} />
      <Route exact path="/restablecer/:token" children={<ResetPage />} />
      <Route
        exact
        path="/registro/:token"
        children={<CompleteRegisterPage />}
      />

      <PrivateRoute exact path="/admin" children={<AdminPage />} />
      <PrivateRoute exact path="/admin/usuarios" children={<UsersPage />} />
      <PrivateRoute exact path="/admin/entidades" children={<EntitiesPage />} />
      <PrivateRoute exact path="/admin/perfil" children={<ProfilePage />} />

      <PrivateRoute
        exact
        path="/admin/pendientes"
        children={<PendingScholarshipsPage />}
      />
      <PrivateRoute
        exact
        path="/admin/convocatorias/crear"
        children={<CreateScholarshipPage />}
      />
      <PrivateRoute
        exact
        path="/admin/convocatorias/:id"
        children={<AdminScholarshipPage />}
      />

      <Route path="*" children={<NotFoundPage />} />
    </Switch>
  );
}

export default App;
