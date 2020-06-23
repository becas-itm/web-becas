import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from 'auth/PrivateRoute';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const ResetPage = lazy(() => import('./pages/ResetPage'));
const RecoverPage = lazy(() => import('./pages/RecoverPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));

const AdminPage = lazy(() => import('./pages/HomePage'));
const UsersPage = lazy(() => import('./pages/UsersPage'));
const EntitiesPage = lazy(() => import('./pages/EntitiesPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const PendingScholarshipsPage = lazy(() =>
  import('./pages/PendingScholarshipsPage'),
);

const AdminScholarshipPage = lazy(() => import('./pages/ScholarshipPage'));
const CreateScholarshipPage = lazy(() =>
  import('./pages/CreateScholarshipPage'),
);

const AUTH_ROUTES = {
  auth: '/login',
  afterLogin: '/',
  afterLogout: '/login',
};

const PUBLIC_ROUTES = [
  '/login',
  '/recuperar',
  '/restablecer/:token',
  '/registro/:token',
];

function App() {
  return (
    <Switch>
      <PrivateRoute exact path="/" children={<AdminPage />} />

      <Route exact path={AUTH_ROUTES.auth} children={<LoginPage />} />
      <Route exact path="/recuperar" children={<RecoverPage />} />
      <Route exact path="/restablecer/:token" children={<ResetPage />} />
      <Route exact path="/registro/:token" children={<RegisterPage />} />

      <PrivateRoute exact path="/usuarios" children={<UsersPage />} />

      <PrivateRoute exact path="/entidades" children={<EntitiesPage />} />

      <PrivateRoute exact path="/perfil" children={<ProfilePage />} />

      <PrivateRoute exact path="/pendientes">
        <PendingScholarshipsPage />
      </PrivateRoute>

      <PrivateRoute exact path="/convocatorias/crear">
        <CreateScholarshipPage />
      </PrivateRoute>

      <PrivateRoute exact path="/convocatorias/:id">
        <AdminScholarshipPage />
      </PrivateRoute>

      <Route path="*" children={<div>No pudimos encontrar la página</div>} />
    </Switch>
  );
}

export default App;

export { AUTH_ROUTES, PUBLIC_ROUTES };
