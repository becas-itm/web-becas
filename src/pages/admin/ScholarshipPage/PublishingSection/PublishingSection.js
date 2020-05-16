import React from 'react';

import {
  Warning,
  VerifiedUser,
  SettingsBackupRestore,
} from 'ui/components/Icon';

import { formatDate } from 'ui/components/DateInput';
import Button, { COLOR } from 'ui/components/Button';
import EntityAvatar from 'ui/components/EntityAvatar';
import { Block } from 'ui/components/Icon/icons/Block';

export function PublishingSection({
  entity,
  onApprove,
  onDeny,
  onArchive,
  fillStatus,
  approval,
  denial,
  onRestore,
  state,
  archive,
}) {
  let actions = null;

  if (state === 'PUBLISHED') {
    actions = (
      <div className="flex items-start">
        <VerifiedUser className="text-green-400 mr-3" />
        <div className="flex-1">
          <div className="mb-2">
            <label
              className="text-base text-active"
              data-testid="statusMessage"
            >
              Aprobación
            </label>
          </div>

          <div data-testid="approvalDate">
            {formatDate(approval.approvedAt)}
          </div>

          <div className="my-4">
            <Button
              outline
              onClick={onArchive}
              color={COLOR.danger}
              data-testid="archive"
            >
              Archivar
            </Button>
          </div>
        </div>
      </div>
    );
  } else if (state === 'DENIED' || state === 'ARCHIVED') {
    const archivedAt =
      state === 'DENIED' ? denial.deniedAt : archive.archivedAt;
    const reason =
      state === 'DENIED' ? denial.reason : 'Convocatoria rechazada/archivada.';

    actions = (
      <div className="flex items-start">
        <Block className="text-red-300 mr-3" />
        <div className="flex-1">
          <label className="block text-base" data-testid="statusMessage">
            Rechazada
          </label>

          <div className="my-2" data-testid="denialDate">
            {formatDate(archivedAt)}
          </div>

          <div data-testid="denialReason">{reason}</div>

          <div className="my-4">
            <Button outline onClick={onRestore} data-testid="restore">
              <SettingsBackupRestore className="mr-2" />
              Restaurar
            </Button>
          </div>
        </div>
      </div>
    );
  } else if (fillStatus === 'COMPLETE') {
    actions = (
      <div className="flex items-start">
        <VerifiedUser className="text-green-400 mr-3" />
        <div className="flex-1">
          <label
            className="block text-base text-active"
            data-testid="statusMessage"
          >
            Convocatoria lista para aprobar
          </label>
          <div className="my-6">
            <Button onClick={onApprove} data-testid="approve">
              Aprobar
            </Button>
            <Button
              outline
              onClick={onDeny}
              color={COLOR.danger}
              data-testid="deny"
              className="ml-3"
            >
              Rechazar
            </Button>
          </div>
        </div>
      </div>
    );
  } else if (fillStatus === 'INCOMPLETE') {
    actions = (
      <div className="flex items-start">
        <Warning style={{ color: '#FAC809' }} className="mr-3" />
        <div className="flex-1">
          <div className="mb-3">
            <label
              className="text-base text-active"
              data-testid="statusMessage"
            >
              Completa todos los campos de la convocatoria antes de publicarla
            </label>
          </div>
          <div className="my-6">
            <Button disabled data-testid="approve">
              Aprobar
            </Button>
            <Button
              outline
              onClick={onDeny}
              color={COLOR.danger}
              data-testid="deny"
              className="ml-3"
            >
              Rechazar
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="flex flex-wrap pt-6 px-4 lg:px-0 border-t mt-8">
      <div className="mb-6 md:mb-0 md:flex-1">
        <h2 className="text-active font-semibold">Publicación</h2>
        <p className="text-sm text-medium mt-1 md:pr-10">
          Aprueba la publicación de esta convocatoria para que los demás puedan
          verla.
        </p>
      </div>

      <div className="w-full md:max-w-lg">
        {actions}

        {entity && (
          <div className="mt-2 flex items-start">
            <div className="mr-4">
              <EntityAvatar name={entity.name} />
            </div>
            <div className="flex-1">
              <label className="block text-base text-medium">
                Ofrecida por
              </label>
              <div>{entity.fullName}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
