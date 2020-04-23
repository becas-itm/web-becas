import React from 'react';
import { useParams } from 'react-router-dom';

import { useToggle } from 'utils/hooks';
import { Edit } from 'ui/components/Icon';
import Spinner from 'ui/components/Spinner';
import IconButton from 'ui/components/IconButton';
import GoBackButton from 'ui/components/GoBackButton';
import AdminTemplate from 'ui/templates/AdminTemplate';

import { useScholarship } from './useScholarship';
import PendingScholarship from './PendingScholarship';
import EditableScholarship from './EditableScholarship';
import { useSnackbar } from 'ui/components/Snackbar';

function PendingScholarshipDetailPage() {
  const { id } = useParams();
  const snack = useSnackbar();
  const { scholarship, isFetching, refetch } = useScholarship(id);

  const [isEditing, toggleEdit] = useToggle();

  const handleEdit = () => {
    toggleEdit();
    refetch();
    snack.show('Convocatoria actualizada.');
  };

  return (
    <AdminTemplate>
      <header className="flex items-center md:hidden h-12 px-2 border-b bg-white">
        <GoBackButton />
        <h1 className="flex-1 mx-2">Convocatoria</h1>
        {!isEditing && (
          <IconButton onClick={toggleEdit} icon={Edit}>
            Editar convocatoria
          </IconButton>
        )}
      </header>

      <main
        style={{ maxWidth: 840 }}
        className="max-w-screen-md mx-auto p-4 bg-white shadow md:rounded  sm:py-10 md:py-16 my-8"
      >
        {isFetching ? (
          <div className="text-center">
            <Spinner />
          </div>
        ) : isEditing ? (
          <EditableScholarship
            scholarship={scholarship}
            onCancel={toggleEdit}
            onEdit={handleEdit}
          />
        ) : (
          <PendingScholarship scholarship={scholarship} onEdit={toggleEdit} />
        )}
      </main>
    </AdminTemplate>
  );
}

export default PendingScholarshipDetailPage;
