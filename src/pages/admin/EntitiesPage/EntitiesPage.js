import React from 'react';
import { api } from 'utils/api2';
import { useQuery } from 'react-query';
// import { useQuery, useMutation } from 'react-query';

import { useToggle } from 'utils/hooks';
import { useSnackbar } from 'ui/components/Snackbar';
import AdminTemplate from 'ui/templates/AdminTemplate';
import Avatar from 'ui/components/Avatar';
import { InviteUserDialog } from './EntityDialog';
import { Add } from 'ui/components/Icon';
import Button from 'ui/components/Button';

function useGetAllEntities() {
  const { data, isFetching } = useQuery('/api/entities/', api.get);

  return {
    isFetching,
    entities: data || [],
  };
}

// function useCreateEntity() {
//   const [create, result] = useMutation(data =>
//     api.post('/api/entities/', data),
//   );
//   return {
//     create,
//     isLoading: result.status === 'loading',
//   };
// }

export default function EntitiesPage() {
  const { entities } = useGetAllEntities();
  const [isCreating, toggleCreate] = useToggle();

  // const { entities: initialEntities } = useGetAllEntities();
  // const { create, isCreating } = useCreateEntity();
  // const [entities, setEntities] = React.useState(initialEntities);
  const snack = useSnackbar();
  const handleCreate = fields => {
    // request
    // const newEntity = create;

    // setEntities(entities.concat(newEntity));
    snack.show('Entidad creada.');
    toggleCreate();
  };
  return (
    <AdminTemplate className="relative">
      <div className="max-w-5xl mx-auto py-4 px-6">
        <header className="mb-4 flex flex-wrap items-baseline justify-between">
          <h1 className="text-xl font-semibold">Entidades</h1>
          <Button onClick={toggleCreate} outline>
            <div className="flex flex-wrap items-center">
              Crear <Add className="ml-2" />
            </div>
          </Button>
        </header>

        <header className="flex flex-wrap sm:justify-around md:justify-start">
          {entities.map(entity => (
            <div
              key={entity.code}
              className="w-full sm:w-auto mt-4 mr-4 md:mt-8 md:mr-8"
            >
              <div className="p-4 pr-6 flex flex-wrap items-start rounded shadow bg-white">
                <Avatar name={entity.name} />
                <div className="pl-3">
                  <h3 className="text-lg font-semibold">{entity.name}</h3>
                  <div className="text-base text-medium max-w-xs overflow-hidden">
                    {entity.website}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </header>
      </div>

      <InviteUserDialog
        isOpen={isCreating}
        onInvite={handleCreate}
        onCancel={toggleCreate}
      />
    </AdminTemplate>
  );
}
