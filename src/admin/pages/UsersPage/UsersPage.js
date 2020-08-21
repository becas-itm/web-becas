import React from 'react';
import { useGet } from 'utils/api';

import { Add } from 'ui/Icon';
import Button from 'ui/Button';
import { useToggle } from 'utils/hooks';
import { useSnackbar } from 'ui/Snackbar';
import AdminTemplate from 'admin/ui/AdminTemplate';

import { UserItem } from './UserItem';
import { InviteUserDialog } from './InviteUserDialog';

function useGetAllUsers() {
  const { data, isFetching } = useGet('/users/');

  return {
    isFetching,
    users: data || [],
  };
}
export default function UsersPage() {
  const { users } = useGetAllUsers();
  const snack = useSnackbar();
  const [isInviting, toggleInvite] = useToggle();

  const handleInvite = () => {
    snack.show('Usuario invitado.');
    toggleInvite();
  };

  return (
    <AdminTemplate>
      <div className="max-w-2xl lg:max-w-6xl mx-auto p-4">
        <header
          className="bg-white rounded-sm flex items-start justify-between shadow-sm p-4 md:p-6"
          style={{
            boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.12)',
          }}
        >
          <div>
            <h1 className="text-2xl">Usuarios</h1>
            <p className="text-base text-medium leading-tight mt-2">
              Invita a otros administradores que hagan parte del sistema de
              becas.
            </p>
          </div>
          <div className="ml-4">
            <Button
              onClick={toggleInvite}
              data-testid="EntitiesList__createButton"
            >
              <span className="flex items-center">
                <Add className="mr-1" /> Invitar
              </span>
            </Button>
          </div>
        </header>

        <div className="mt-8">
          <div className="md:px-4">
            <div className="flex flex-wrap -mb-6 md:-mx-4">
              {users.map(user => (
                <div
                  key={user.uid}
                  className="w-full mb-6 md:px-4 md:w-1/2 lg:w-1/3"
                >
                  <UserItem {...user} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <InviteUserDialog
        isOpen={isInviting}
        onInvite={handleInvite}
        onCancel={toggleInvite}
      />
    </AdminTemplate>
  );
}
