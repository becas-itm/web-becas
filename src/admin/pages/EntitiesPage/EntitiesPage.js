import React from 'react';
import { useMutation } from 'react-query';

import Spinner from 'ui/Spinner';
import api, { useGet } from 'utils/api';
import { useToggle } from 'utils/hooks';
import { useSnackbar } from 'ui/Snackbar';
import AdminTemplate from 'admin/ui/AdminTemplate';

import { EntitiesList } from './EntitiesList';
import { EntityDialog } from './EntityDialog';

const ENTITIES_ENDPOINT = '/entities/';

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

function useEditEntity() {
  const snack = useSnackbar();
  const [isOpen, toggleDialog] = useToggle();

  const [mutate, { status }] = useMutation(({ code, ...data }) =>
    api.put(`${ENTITIES_ENDPOINT}${code}/`, data),
  );
  const isLoading = status === 'loading';

  const [currentEntity, setEntity] = React.useState(null);

  return {
    startEdit: entity => {
      setEntity(entity);
      toggleDialog();
    },
    getDialogProps: ({ onEdit }) => ({
      isOpen,
      isLoading,
      entity: currentEntity,
      onSubmit: async values => {
        const entity = await mutate(values);
        toggleDialog();
        onEdit(entity, values);
        setEntity(null);
        snack.show('Entidad actualizada.');
      },
      onCancel: () => {
        if (!isLoading) {
          toggleDialog();
        }
      },
    }),
  };
}

function useEntities(initialEntities) {
  const [entities, setEntities] = React.useState(initialEntities || []);

  return React.useMemo(
    () => ({
      entities,
      onAdd: entity => setEntities(entities.concat(entity)),
      onEdit: (entity, oldEntity) => {
        setEntities(
          entities.map(ent => (ent.code === oldEntity.code ? entity : ent)),
        );
      },
    }),
    [entities],
  );
}

function EntitiesPageContent() {
  const { data } = useGet(ENTITIES_ENDPOINT);
  const { entities, onAdd, onEdit } = useEntities(data || []);

  const { toggleCreate, getCreateProps } = useCreateEntity(ENTITIES_ENDPOINT);

  const editEntity = useEditEntity();

  return (
    <div className="max-w-6xl mx-auto px-4">
      <EntitiesList
        entities={entities}
        onNew={toggleCreate}
        onEdit={editEntity.startEdit}
      />
      <EntityDialog title="Nueva entidad" {...getCreateProps({ onAdd })} />
      <EntityDialog
        title="Editar entidad"
        {...editEntity.getDialogProps({ onEdit })}
      />
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
