import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from 'ui/components/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const DisclaimerPage = lazy(() => import('pages/DisclaimerPage'));
const ScholarshipPage = lazy(() => import('pages/ScholarshipPage'));

const LoginPage = lazy(() => import('pages/LoginPage'));
const ResetPage = lazy(() => import('pages/ResetPage'));
const RecoverPage = lazy(() => import('pages/RecoverPage'));
const CompleteRegisterPage = lazy(() => import('pages/CompleteRegisterPage'));

const AdminPage = lazy(() => import('pages/admin/Home'));
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
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/buscar" element={<SearchPage />} />
      <Route path="/terminos" element={<DisclaimerPage />} />
      <Route path="/convocatoria/:id" element={<ScholarshipPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/recuperar" element={<RecoverPage />} />
      <Route path="/restablecer/:token" element={<ResetPage />} />
      <Route path="/registro/:token" element={<CompleteRegisterPage />} />

      <PrivateRoute path="/admin" element={<AdminPage />} />
      <PrivateRoute path="/admin/usuarios" element={<UsersPage />} />
      <PrivateRoute path="/admin/entidades" element={<EntitiesPage />} />
      <PrivateRoute path="/admin/perfil" element={<ProfilePage />} />

      <PrivateRoute
        path="/admin/pendientes"
        element={<PendingScholarshipsPage />}
      />
      <PrivateRoute
        path="/admin/convocatorias/crear"
        element={<CreateScholarshipPage />}
      />
      <PrivateRoute
        path="/admin/convocatorias/:id"
        element={<AdminScholarshipPage />}
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
