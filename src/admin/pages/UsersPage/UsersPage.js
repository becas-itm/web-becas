import React from 'react';
import { useGet } from 'utils/api';

import { Add } from 'ui/Icon';
import Button from 'ui/Button';
import { useToggle } from 'utils/hooks';
import { useSnackbar } from 'ui/Snackbar';
import GenderAvatar from 'ui/GenderAvatar';
import AdminTemplate from 'admin/ui/AdminTemplate';

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
    <AdminTemplate className="relative">
      <div className="max-w-5xl mx-auto py-4 px-6">
        <header className="mb-4 flex flex-wrap items-baseline justify-between">
          <h1 className="text-xl font-semibold">Usuarios</h1>
          <Button onClick={toggleInvite} outline>
            <div className="flex flex-wrap items-center">
              Invitar <Add className="ml-2" />
            </div>
          </Button>
        </header>

        <header className="flex flex-wrap sm:justify-around md:justify-start">
          {users.map(user => (
            <div
              key={user.uid}
              className="w-full sm:w-auto mt-4 mr-4 md:mt-8 md:mr-8"
            >
              <div className="p-4 pr-6 flex flex-wrap items-start rounded shadow bg-white">
                <GenderAvatar alt={user.displayName} gender={user.gender} />
                <div className="pl-3">
                  <h3 className="text-lg font-semibold">{user.displayName}</h3>
                  <div className="text-base text-medium max-w-xs overflow-hidden">
                    {user.email}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </header>
      </div>

      <InviteUserDialog
        isOpen={isInviting}
        onInvite={handleInvite}
        onCancel={toggleInvite}
      />
    </AdminTemplate>
  );
}
