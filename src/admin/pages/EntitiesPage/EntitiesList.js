import React from 'react';

import { Add } from 'ui/Icon';
import Button from 'ui/Button';

import { EntityItem } from './EntityItem';
import { EmptyEntitiesState } from './EmptyEntitiesState';

export function EntitiesList({ entities = [], onNew, onEdit }) {
  if (entities.length === 0) {
    return <EmptyEntitiesState onNewClick={onNew} />;
  }

  return (
    <div data-testid="EntitiesList">
      <header
        className="bg-white rounded-sm flex items-start justify-between shadow-sm p-4 md:p-6"
        style={{
          boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.12)',
        }}
      >
        <div>
          <h1 className="text-2xl">Entidades</h1>
          <p className="text-base text-medium leading-tight mt-2">
            Agrega y edita entidades que ofertan becas y convocatorias.
          </p>
        </div>
        <div className="ml-4">
          <Button onClick={onNew} data-testid="EntitiesList__createButton">
            <span className="flex items-center">
              <Add className="mr-1" /> Nueva
            </span>
          </Button>
        </div>
      </header>

      <div className="mt-8">
        <div className="md:px-4">
          <div className="flex flex-wrap -mb-6 md:-mx-4">
            {entities.map(entity => (
              <div
                key={entity.code}
                className="w-full mb-6 md:px-4 md:w-1/2 lg:w-1/3"
              >
                <EntityItem
                  name={entity.name}
                  website={entity.website}
                  onEdit={() => onEdit(entity)}
                  data-testid="EntityItem"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
