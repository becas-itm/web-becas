import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { api } from 'utils/api2';
import AppLogo from 'ui/AppLogo';
import Spinner from 'ui/Spinner';
import LinkButton from 'ui/LinkButton';
import { ThreeRowTemplate } from 'ui/ThreeRowTemplate';

import { RegisterCard } from './RegisterCard';

export default function CompleteRegisterPage() {
  const { token } = useParams();
  const { data: user, isFetching, error } = useQuery(
    ['/api/auth/register', token],
    (url, token) => api.get(`${url}/${token}/`),
    { retry: false },
  );
  const [registered, setRegistered] = React.useState(false);

  return (
    <ThreeRowTemplate
      header={
        <header className="bg-white border-b">
          <div className="px-4 h-16 flex items-center max-w-md mx-auto">
            <AppLogo children={null} />
            <div className="pl-3 text-lg">Completar registro</div>
          </div>
        </header>
      }
    >
      <div className="max-w-md mx-auto px-4 mt-8">
        <div className="p-8 bg-white rounded shadow">
          {isFetching && (
            <div className="text-center">
              <Spinner />
            </div>
          )}

          {!isFetching && error && (
            <div>
              <h1 className="text-2xl mb-4">Enlace caducado</h1>
              <p>
                Comuníquese con el administrador para la creación de un nuevo
                usuario.
              </p>
            </div>
          )}

          {registered && (
            <div>
              <h1 className="text-2xl mb-4">Registro completado</h1>
              <p className="mb-2">Ahora puedes ingresar al sistema.</p>
              <LinkButton to="/login">Iniciar sesión</LinkButton>
            </div>
          )}

          {!isFetching && !error && !registered && (
            <RegisterCard
              user={user}
              token={token}
              onRegister={() => setRegistered(true)}
            />
          )}
        </div>
      </div>
    </ThreeRowTemplate>
  );
}
