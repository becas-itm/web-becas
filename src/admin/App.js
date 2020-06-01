import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from 'ui/components/PrivateRoute';

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

function App() {
  return (
    <Switch>
      <PrivateRoute exact path="/" children={<AdminPage />} />

      <Route exact path="/login" children={<LoginPage />} />
      <Route exact path="/recuperar" children={<RecoverPage />} />
      <Route exact path="/restablecer/:token" children={<ResetPage />} />
      <Route
        exact
        path="/registro/:token"
        children={<CompleteRegisterPage />}
      />

      <PrivateRoute exact path="/usuarios" children={<UsersPage />} />

      <PrivateRoute exact path="/entidades" children={<EntitiesPage />} />

      <PrivateRoute exact path="/perfil" children={<ProfilePage />} />

      <PrivateRoute
        exact
        path="/pendientes"
        children={<PendingScholarshipsPage />}
      />
      <PrivateRoute
        exact
        path="/convocatorias/crear"
        children={<CreateScholarshipPage />}
      />
      <PrivateRoute
        exact
        path="/convocatorias/:id"
        children={<AdminScholarshipPage />}
      />

      <Route path="*" children={<div>No pudimos encontrar la página</div>} />
    </Switch>
  );
}

export default App;
