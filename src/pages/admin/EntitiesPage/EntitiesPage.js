import React from 'react';
import { useMutation } from 'react-query';

import { api } from 'utils/api2';
import Spinner from 'ui/components/Spinner';
import { useGet, useToggle } from 'utils/hooks';
import { useSnackbar } from 'ui/components/Snackbar';
import AdminTemplate from 'ui/templates/AdminTemplate';

import { EntitiesList } from './EntitiesList';
import { EntityDialog } from './EntityDialog';

const ENTITIES_ENDPOINT = '/api/entities/';

function useCreateEntity(url) {
  const snack = useSnackbar();
  const [isOpen, toggleCreate] = useToggle();

  const [mutate, { status }] = useMutation(data => api.post(url, data));
  const isLoading = status === 'loading';

  return {
    toggleCreate,
    getCreateProps: ({ onAdd }) => ({
      isOpen,
      isLoading,
      onSubmit: async values => {
        const entity = await mutate(values);
        toggleCreate();
        onAdd(entity);
        snack.show('Entidad creada.');
      },
      onCancel: () => {
        if (!isLoading) {
          toggleCreate();
        }
      },
    }),
  };
}

function useEntities(initialEntities) {
  const [entities, setEntities] = React.useState(initialEntities || []);

  const onAdd = entity => setEntities(entities.concat(entity));

  return { entities, onAdd };
}

function EntitiesPageContent() {
  const { data } = useGet(ENTITIES_ENDPOINT);
  const { entities, onAdd } = useEntities(data || []);

  const { toggleCreate, getCreateProps } = useCreateEntity(ENTITIES_ENDPOINT);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <EntitiesList entities={entities} onNew={toggleCreate} />
      <EntityDialog title="Nueva entidad" {...getCreateProps({ onAdd })} />
    </div>
  );
}

function EntitiesPage() {
  return (
    <AdminTemplate>
      <React.Suspense
        fallback={
          <div className="text-center mt-8">
            <Spinner />
          </div>
        }
      >
        <EntitiesPageContent />
      </React.Suspense>
    </AdminTemplate>
  );
}

export default EntitiesPage;
